# Service Charge Calculator

A web application that calculates service charges based on tiered percentage rates.

## Pricing Structure

- $0 - $1,000: 15% service charge
- $1,001 - $2,000: 14% service charge
- $2,001 - $3,000: 13% service charge
- And so on... (decreases by 1% per $1,000)
- Minimum service charge: 0%

## Installation

```bash
npm install
```

## Running Locally

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Running Tests

```bash
npm test
```

## Development Mode

```bash
npm run dev
```

## Docker Deployment

### Build the Docker image

```bash
docker build -t service-charge-calculator .
```

### Run the Docker container

```bash
docker run -p 3000:3000 service-charge-calculator
```

## API Endpoints

### POST /api/calculate

Calculate service charge for a given amount.

**Request Body:**
```json
{
  "amount": 1500
}
```

**Response:**
```json
{
  "amount": 1500,
  "percentage": 14,
  "serviceCharge": 210,
  "total": 1710
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

## Deployment Options

### Option 1: Docker

The application includes a Dockerfile for easy containerized deployment.

### Option 2: Cloud Platforms

This app can be deployed to:
- Heroku
- AWS Elastic Beanstalk
- Google Cloud Run
- Azure App Service
- DigitalOcean App Platform
- Railway
- Render

### Option 3: Traditional Hosting

Deploy to any VPS or hosting service that supports Node.js applications.

## Environment Variables

- `PORT`: Port number (default: 3000)
