# GeekeddHub

A full-stack application using Next.js, NestJS, MySQL, MinIO, and Nginx.

## Prerequisites

- Docker
- Docker Compose

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AdamLahovskyi/geekeddhub.git
cd geekeddhub
```

2. Create `.env` file in the root directory:
```env
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=app
DATABASE_URL=mysql://root:root@db:3306/app

MINIO_ROOT_USER=minio
MINIO_ROOT_PASSWORD=minio123
MINIO_URL=minio:9000
```

3. Start the application:
```bash
docker compose up -d
```

## Access URLs

| Service | URL | Credentials |
|---------|-----|-------------|
| Frontend | [http://localhost:81](http://localhost:81) | - |
| API (Swagger) | [http://localhost:81/api](http://localhost:81/api) | - |
| MinIO Console | [http://localhost:9001](http://localhost:9001) | User: minio<br>Pass: minio123 |
| phpMyAdmin | [http://localhost:8080](http://localhost:8080) | User: root<br>Pass: root |
| MinIO API | [http://localhost:9000](http://localhost:9000) | - |

## Development

The project is set up with hot-reloading enabled:
- Backend (NestJS) automatically reloads on file changes
- Frontend (React.js) includes hot-reloading functionality

### Project Structure
```
geekeddhub/
├── backend/                 # NestJS API
├── frontend/               # Next.js frontend
├── docker/
│   ├── backend/           # Backend Docker config
│   ├── frontend/          # Frontend Docker config
│   └── nginx/             # Nginx reverse proxy config
├── docker-compose.yml     # Docker services config
├── .env                   # Environment variables
└── README.md             # This file
```

### Docker Commands

```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs -f

# Rebuild a specific service
docker compose build <service_name>

# Restart a specific service
docker compose restart <service_name>
```

### Services

- **Frontend**: React.js application running on port 3000
- **Backend**: NestJS API with Swagger documentation
- **Database**: MySQL 8.0
- **MinIO**: Object storage service
- **phpMyAdmin**: Database management interface
- **Nginx**: Reverse proxy managing routes

### Port Mappings

- 81: Nginx (Main application access)
- 3000: Frontend (React.js)
- 5000: Backend (NestJS)
- 8080: phpMyAdmin
- 9000: MinIO API
- 9001: MinIO Console
- 3307: MySQL

## Notes

- The backend API documentation is available at `/api`
- Database files are persisted in a Docker volume
- MinIO data is stored in a separate Docker volume