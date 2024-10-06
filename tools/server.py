#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from urllib.request import Request, urlopen


PORT = 9000


class ProxyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/api/'):
            self.proxy_news()
        else:
            self.proxy_esbuild()

    def proxy_esbuild(self):
        target_url = 'http://localhost:8001' + self.path
        try:
            request = Request(target_url)
            with urlopen(request) as response:
                self.send_response(response.status)
                self.send_header(
                    'Content-type', response.headers.get('Content-Type')
                )
                self.end_headers()
                content = response.read()
                self.wfile.write(content)
        except Exception as e:
            self.send_error(500, f'Proxy Error: {e}')

    def proxy_news(self):
        target_url = 'https://news.donm.cc' + self.path[5:]
        headers = { 'Accept': 'application/json' }
        try:
            request = Request(target_url, headers=headers)
            with urlopen(request) as response:
                self.send_response(response.status)
                self.send_header(
                    'Content-type', response.headers.get('Content-Type')
                )
                self.end_headers()
                content = response.read()
                content = content.replace(b'https://news.donm.cc', b'http://localhost:' + str(PORT).encode())
                self.wfile.write(content)
        except Exception as e:
            self.send_error(500, f'Proxy Error: {e}')


def main():
    with TCPServer(('', PORT), ProxyHandler) as server:
        print(f'Serving on port {PORT}')
        server.serve_forever()


if __name__ == '__main__':
    main()
