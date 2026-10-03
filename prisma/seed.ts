import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { slug: 'books', name: 'Books', description: 'General books, novels and academic reads' },
    { slug: 'school-books', name: 'School Books', description: 'NCERT and school curriculum books' },
    { slug: 'competitive-exams', name: 'Competitive Exams', description: 'Exam prep books and guides' },
    { slug: 'notebooks', name: 'Notebooks', description: 'Notebooks, register books and copies' },
    { slug: 'pens-writing', name: 'Pens & Writing', description: 'Pens, highlighters and writing tools' },
    { slug: 'school-stationery', name: 'School Stationery', description: 'Essentials for students and teachers' },
    { slug: 'office-stationery', name: 'Office Stationery', description: 'Office essentials and supplies' },
    { slug: 'art-craft', name: 'Art & Craft', description: 'Creative supplies and craft tools' },
    { slug: 'educational-supplies', name: 'Educational Supplies', description: 'Learning tools and classroom materials' },
    { slug: 'wholesale', name: 'Wholesale', description: 'Bulk procurement and institutional orders' }
  ];

  for (const item of categories) {
    await prisma.category.upsert({
      where: { slug: item.slug },
      update: {},
      create: item
    });
  }

  const brandData = ['Classmate', 'Apsara', 'Natraj', 'Oxford', 'Arihant', 'Camlin', 'Campus', 'A1'];
  for (const name of brandData) {
    await prisma.brand.upsert({ where: { name }, update: {}, create: { name } });
  }

  const publisherData = ['NCERT', 'Arihant Publications', 'Oxford Press', 'Madhuban', 'S. Chand', 'Kiran Prakashan'];
  for (const name of publisherData) {
    await prisma.publisher.upsert({ where: { name }, update: {}, create: { name } });
  }

  const authorData = ['R.K. Narayan', 'Arihant Experts', 'R.S. Aggarwal', 'M. L. Khanna', 'Dr. S. Kumar'];
  for (const name of authorData) {
    await prisma.author.upsert({ where: { name }, update: {}, create: { name } });
  }

  const adminPassword = await bcrypt.hash('admin123', 10);
  const managerPassword = await bcrypt.hash('manager123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@shardapustak.com' },
    update: {},
    create: {
      name: 'Sharda Admin',
      email: 'admin@shardapustak.com',
      phone: '9876543210',
      password: adminPassword,
      role: 'SUPER_ADMIN'
    }
  });

  await prisma.user.upsert({
    where: { email: 'manager@shardapustak.com' },
    update: {},
    create: {
      name: 'Retail Manager',
      email: 'manager@shardapustak.com',
      phone: '9876543211',
      password: managerPassword,
      role: 'MANAGER'
    }
  });

  const settings = [
    { key: 'business_name', value: 'BOOKS & STATIONERY' },
    { key: 'brand_name', value: 'BOOKS & STATIONERY' },
    { key: 'phone', value: '+91 98765 43210' },
    { key: 'whatsapp', value: '919876543210' },
    { key: 'email', value: 'hello@shardapustak.com' },
    { key: 'address', value: 'Patna, Bihar' },
    { key: 'gst_number', value: '10ABCDE1234F2Z5' },
    { key: 'currency', value: 'INR' },
    { key: 'delivery_fee', value: '49' },
    { key: 'free_delivery_threshold', value: '699' },
    { key: 'cod_enabled', value: 'true' },
    { key: 'cod_max_order_value', value: '2500' },
    { key: 'cod_handling_fee', value: '30' }
  ];

  for (const item of settings) {
    await prisma.settings.upsert({
      where: { key: item.key },
      update: { value: item.value },
      create: { key: item.key, value: item.value }
    });
  }

  console.log('Demo data seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
