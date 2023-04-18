# seeds.rb

AdminProduct.destroy_all
AdminUser.destroy_all
Admin.destroy_all
CartItem.destroy_all
Cart.destroy_all
Category.destroy_all
OrderItem.destroy_all
Order.destroy_all
Payment.destroy_all
ProductCategory.destroy_all
Product.destroy_all
User.destroy_all


puts "🌱Seeding in process....🌱"

# Create Categories
electronics = Category.create(name: "Electronics")
clothing = Category.create(name: "Clothing")
books = Category.create(name: "Books")

# Create Products
iphone = Product.create(title: "iPhone", description: "A smartphone developed by Apple Inc.", imageUrl: "https://example.com/iphone.jpg", price: 999.99)
ipad = Product.create(title: "iPad", description: "A line of tablet computers designed and marketed by Apple Inc.", imageUrl: "https://example.com/ipad.jpg", price: 799.99)
macbook = Product.create(title: "MacBook Pro", description: "A line of Macintosh portable computers introduced in January 2006 by Apple Inc.", imageUrl: "https://example.com/macbook.jpg", price: 1499.99)
tshirt = Product.create(title: "T-shirt", description: "A style of unisex fabric shirt named after the T shape of its body and sleeves.", imageUrl: "https://example.com/tshirt.jpg", price: 19.99)
jeans = Product.create(title: "Jeans", description: "A type of pants or trousers, typically made from denim or dungaree cloth.", imageUrl: "https://example.com/jeans.jpg", price: 49.99)
book1 = Product.create(title: "The Great Gatsby", description: "A novel by the American author F. Scott Fitzgerald.", imageUrl: "https://example.com/gatsby.jpg", price: 9.99)

# Associate Products with Categories
ProductCategory.create(product_id: iphone.id, category_id: electronics.id)
ProductCategory.create(product_id: ipad.id, category_id: electronics.id)
ProductCategory.create(product_id: macbook.id, category_id: electronics.id)
ProductCategory.create(product_id: tshirt.id, category_id: clothing.id)
ProductCategory.create(product_id: jeans.id, category_id: clothing.id)
ProductCategory.create(product_id: book1.id, category_id: books.id)

# Create Users
user1 = User.create(name: "John Doe", email: "johndoe@example.com", password_digest: "password")
user2 = User.create(name: "Jane Smith", email: "janesmith@example.com", password_digest: "password")

# Create Admins
admin1 = Admin.create(email: "admin1@example.com", password_digest: "password")
admin2 = Admin.create(email: "admin2@example.com", password_digest: "password")

# Associate Admins with Products
AdminProduct.create(admin_id: admin1.id, product_id: iphone.id)
AdminProduct.create(admin_id: admin1.id, product_id: ipad.id)
AdminProduct.create(admin_id: admin2.id, product_id: macbook.id)


# Create Carts
cart1 = Cart.create(user_id: user1.id)
cart2 = Cart.create(user_id: user2.id)

# Add Items to Carts
CartItem.create(cart_id: cart1.id, product_id: iphone.id, quantity: 1)
CartItem.create(cart_id: cart1.id, product_id: tshirt.id, quantity: 2)
CartItem.create(cart_id: cart2.id, product_id: book1.id, quantity: 3)

# Create Orders
order1 = Order.create(user_id: user1.id)
order2 = Order.create(user_id: user2.id)

# Add Items to Orders
OrderItem.create(order_id: order1.id, product_id: iphone.id, quantity: 1)
OrderItem.create(order_id: order1.id, product_id: tshirt.id, quantity: 2)
OrderItem.create(order_id: order2.id, product_id: book1.id, quantity: 3)


# Associate Admins with Users
# AdminUser.create(admin_id: Admin.first.id, user_id: User.first.id)
# AdminUser.create(admin_id: Admin.first.id, user_id: User.second.id)

# Create Payments
payment1 = Payment.create(status: "Successful", amount: 100.0, order_id: order1.id)
payment2 = Payment.create(status: "Successful", amount: 50.0, order_id: order2.id)


puts "🌱Seeding done.🌱"
