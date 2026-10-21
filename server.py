"""
IT ROOKIE ARENA AI - MOCK REST API SERVER (JSON-SERVER COMPATIBLE)
Zero-dependency Python 3 HTTP Server serving db.json on http://localhost:3000
Supports GET, POST, PUT, DELETE with CORS headers.
"""

import http.server
import json
import os
import re
import socketserver
import urllib.parse

PORT = 3000
DB_FILE = os.path.join(os.path.dirname(__file__), "db.json")

def load_db():
    if not os.path.exists(DB_FILE):
        return {}
    with open(DB_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_db(data):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

class RestRequestHandler(http.server.BaseHTTPRequestHandler):
    def _send_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")

    def do_OPTIONS(self):
        self.send_response(204)
        self._send_cors()
        self.end_headers()

    def _parse_url(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path.strip("/")
        parts = path.split("/") if path else []
        collection = parts[0] if len(parts) > 0 else ""
        item_id = parts[1] if len(parts) > 1 else None
        query = urllib.parse.parse_qs(parsed.query)
        return collection, item_id, query

    def do_GET(self):
        collection, item_id, query = self._parse_url()
        db = load_db()

        if not collection:
            # Root info
            self.send_response(200)
            self._send_cors()
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            info = {
                "name": "IT Rookie Arena AI - Virtual Server V2.0",
                "endpoints": list(db.keys())
            }
            self.wfile.write(json.dumps(info).encode("utf-8"))
            return

        if collection not in db:
            self.send_response(404)
            self._send_cors()
            self.end_headers()
            return

        items = db[collection]
        if item_id:
            found = next((x for x in items if str(x.get("id")) == item_id), None)
            if found:
                self.send_response(200)
                self._send_cors()
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps(found, ensure_ascii=False).encode("utf-8"))
            else:
                self.send_response(404)
                self._send_cors()
                self.end_headers()
            return

        # Query filter
        if query:
            filtered = []
            for item in items:
                matches = True
                for qk, qv in query.items():
                    if str(item.get(qk)) != str(qv[0]):
                        matches = False
                        break
                if matches:
                    filtered.append(item)
            items = filtered

        self.send_response(200)
        self._send_cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(items, ensure_ascii=False).encode("utf-8"))

    def do_POST(self):
        collection, _, _ = self._parse_url()
        db = load_db()
        if collection not in db:
            db[collection] = []

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)
        data = json.loads(body.decode("utf-8")) if body else {}

        if not data.get("id"):
            data["id"] = f"{collection[:3]}-{int(time.time() * 1000)}"

        db[collection].append(data)
        save_db(db)

        self.send_response(201)
        self._send_cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))

    def do_PUT(self):
        collection, item_id, _ = self._parse_url()
        db = load_db()
        if collection not in db or not item_id:
            self.send_response(404)
            self._send_cors()
            self.end_headers()
            return

        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)
        data = json.loads(body.decode("utf-8")) if body else {}

        items = db[collection]
        for i, item in enumerate(items):
            if str(item.get("id")) == item_id:
                items[i] = {**item, **data}
                save_db(db)
                self.send_response(200)
                self._send_cors()
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps(items[i], ensure_ascii=False).encode("utf-8"))
                return

        self.send_response(404)
        self._send_cors()
        self.end_headers()

    def do_DELETE(self):
        collection, item_id, _ = self._parse_url()
        db = load_db()
        if collection not in db or not item_id:
            self.send_response(404)
            self._send_cors()
            self.end_headers()
            return

        items = db[collection]
        new_items = [x for x in items if str(x.get("id")) != item_id]
        if len(new_items) != len(items):
            db[collection] = new_items
            save_db(db)
            self.send_response(200)
            self._send_cors()
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            self.wfile.write(json.dumps({"success": True}).encode("utf-8"))
        else:
            self.send_response(404)
            self._send_cors()
            self.end_headers()

def run():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), RestRequestHandler) as httpd:
        print("==================================================")
        print("IT ROOKIE ARENA AI - VIRTUAL REST API SERVER")
        print(f"Running at: http://localhost:{PORT}")
        print(f"Watching database: {DB_FILE}")
        print("==================================================")
        httpd.serve_forever()

if __name__ == "__main__":
    import sys
    import time
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    run()
