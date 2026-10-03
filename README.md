# Sharda Pustak

A mobile-first e-commerce foundation for a books and stationery business in Bihar, India.

## Features

- Retail + wholesale storefront
- Product catalog and search
- Category pages and product detail pages
- Mobile-first cart and checkout
- Admin dashboard sections for products, orders and settings
- Placeholder payment, COD, WhatsApp and delivery architecture
- Demo data for development only
- Prisma schema and seed plan for production-grade database structure

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite for local dev (upgrade to PostgreSQL in production)

## Quick Start

1. npm install
2. cp .env.example .env.local
3. npx prisma generate
4. npx prisma db push
5. npx prisma db seed
6. npm run dev

Visit http://localhost:3000

## Admin login

Demo credentials are configured in seed data.

- Admin: admin@shardapustak.com / admin123
- Manager: manager@shardapustak.com / manager123

## Notes

- This is a strong MVP foundation and not a full marketplace or ERP.
- Production secrets should be stored in environment variables only.
