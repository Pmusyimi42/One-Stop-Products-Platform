# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Create some categories
Category.create(name: "Electronics")
Category.create(name: "Clothing")
Category.create(name: "Books")

# Create some products
Product.create(name: "iPhone X", description: "A high-end smartphone from Apple", price: 999.99)
Product.create(name: "MacBook Pro", description: "A powerful laptop from Apple", price: 1999.99)
Product.create(name: "Nike Air Max 90", description: "A classic sneaker from Nike", price: 129.99)
Product.create(name: "Levi's 501 Jeans", description: "An iconic pair of jeans from Levi's", price: 79.99)
Product.create(name: "The Great Gatsby", description: "A classic novel by F. Scott Fitzgerald", price: 9.99)

# Assign categories to products
Product.find_by(name: "iPhone X").categories << Category.find_by(name: "Electronics")
Product.find_by(name: "MacBook Pro").categories << Category.find_by(name: "Electronics")
Product.find_by(name: "Nike Air Max 90").categories << Category.find_by(name: "Clothing")
Product.find_by(name: "Levi's 501 Jeans").categories << Category.find_by(name: "Clothing")
Product.find_by(name: "The Great Gatsby").categories << Category.find_by(name: "Books")

# Create some users
User.create(name: "John Smith", email: "john@example.com", password: "password")
User.create(name: "Jane Doe", email: "jane@example.com", password: "password")

# Create an order for a user
order = Order.create(user: User.first)

# Add some order items to the order
order.order_items.create(product: Product.find_by(name: "iPhone X"), quantity: 1)
order.order_items.create(product: Product.find_by(name: "Levi's 501 Jeans"), quantity: 2)

# Create a payment for the order
Payment.create(amount: 1179.97, status: "paid", order: order)

# Create an admin user
Admin.create(email: "admin@example.com", password: "password")

# Assign a product to the admin user
AdminProduct.create(admin: Admin.first, product: Product.find_by(name: "MacBook Pro"))