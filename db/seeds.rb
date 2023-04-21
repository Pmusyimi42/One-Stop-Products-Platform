# seeds.rb

# AdminProduct.destroy_all
# AdminUser.destroy_all
# Admin.destroy_all
# CartItem.destroy_all
# Cart.destroy_all
# Category.destroy_all
# OrderItem.destroy_all
# Order.destroy_all
# Payment.destroy_all
# ProductCategory.destroy_all
# Product.destroy_all
# User.destroy_all


puts "🌱Seeding in process....🌱"

# Create Admins
admin1 = Admin.create(email: "admin1@example.com", password_digest: "password")
admin2 = Admin.create(email: "pierramaken@gmail.com", password_digest: "pirra")
admin3 = Admin.create(email: "danny@example.com", password_digest: "danny")



# Create Categories
electronics = Category.create(name: "Electronics")
clothing = Category.create(name: "Clothing")
books = Category.create(name: "Books")
shoes = Category.create(name: "Shoes")
furniture = Category.create(name: "Furniture")
perfume = Category.create(name: "Perfume")



# Create Users
user1 = User.create(name: "John Doe", email: "johndoe@example.com", password_digest: "password")
user2 = User.create(name: "Jane Smith", email: "janesmith@example.com", password_digest: "queen")
user3 = User.create(name: "Cisco Ramon ", email: "ciscoRamon@yahoo.com", password_digest: "cisco")
user4 = User.create(name: "Adel Mutu", email: "mahretujulie@yahoo.com", password_digest: "adel")


# Create Products
iphone = Product.create(title: "iPhone", description: "A smartphone developed by Apple Inc.", imageUrl: "https://example.com/iphone.jpg", price: 999.99)
ipad = Product.create(title: "iPad", description: "A line of tablet computers designed and marketed by Apple Inc.", imageUrl: "https://example.com/ipad.jpg", price: 799.99)
macbook = Product.create(title: "MacBook Pro", description: "A line of Macintosh portable computers introduced in January 2006 by Apple Inc.", imageUrl: "https://example.com/macbook.jpg", price: 1499.99)
tshirt = Product.create(title: "T-shirt", description: "A style of unisex fabric shirt named after the T shape of its body and sleeves.", imageUrl: "https://example.com/tshirt.jpg", price: 19.99)
jeans = Product.create(title: "Jeans", description: "A type of pants or trousers, typically made from denim or dungaree cloth.", imageUrl: "https://example.com/jeans.jpg", price: 49.99)
book1 = Product.create(title: "The Great Gatsby", description: "A novel by the American author F. Scott Fitzgerald.", imageUrl: "https://example.com/gatsby.jpg", price: 9.99)
laptop1 = Product.create(title: "Hp-laptop", description: "The HP Envy 13 should do the job nicely; it's compact and capable, and while it's unlikely to provoke actual envy, it certainly has enough power for both creative work and day-to-day business stuff.", imageUrl: "https://www.techyshop.co.ke/wp-content/uploads/2022/07/hd2-scaled.jpg", price: 65000.97 ) 
shoes1 = Product.create(title: "Balenciaga shoes", description: "Balenciaga shoes are expensive due to their high-end quality materials, exceptional craftsmanship, and unique designs that are often exclusive and limited edition.", imageUrl: "https://5.imimg.com/data5/ANDROID/Default/2020/12/TN/EQ/OG/54132075/product-jpeg-1000x1000.jpg", price: 7000.70)
book2 = Product.create(title: "White Noise", description: "This is the story of his absurd life; a life that is going well enough, until a chemical spill from a train carriage releases an Airborne Toxic Event and Jack is forced to confront his biggest fear his own mortality. ", imageUrl: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529077261.jpg", price: 5500.00)
furniture1 = Product.create(title: "Outdoor sofa", description: "Outdoor Sofa, comprising: - x - Seater Sofa,, 2 - Single Sofas & Coffee Table., Its all about the great outdoors with this BALI outdoor set", imageUrl: "https://furniturepalacekenya.com/wp-content/uploads/2022/01/0O2A9943.jpg", price: 70000.00)
perfume1 = Product.create(title: "Coco Mademoiselle EDP", description: "Classified as Oriental Woody.”A new facet of the Coco Mademoiselle personality amplified by an extreme dose of Patchouli and an Amber accord that combines Tonka Bean and Vanilla from Madagascar.", imageUrl: "https://winaonline.co.ke/wp-content/uploads/2023/02/Coco-Mademoiselle-EDP-Intense-100ml-768x768.jpg", price: 8000.00)
clothing1 = Product.create(title: "Men's long sleeve shirt", description: "The cheapest price of Men's Clothes Shirts New men's autumn cotton linen long sleeve shirt solid color stand collar shirt fashion slim men's wear in Kenya was 1,875 KSh from Shoplite within the past 18 months.", imageUrl: "https://images.yaoota.com/HfV6--lCld09NPdMHcrGGV4wywA=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ke/media/crawledproductimages/e1ab75721a75f7500f3c59ae095170b0653aa580.jpg", price: 2370.00)
book3 = Product.create(title: "American Psycho", description: "American Psycho is the story of Patrick Bateman, a New York City high-flier with a penchant for fine wines, slickly cut suits and brutal murder. As Bateman's obsession with his hedonistic passions comes to a head, he descends into madness, with macabre and darkly comedic repercussions.", imageUrl: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529077155.jpg", price: 3000.00)
perfume2 = Product.create(title: "Bleu de Chanel", description: "Chanels name is synonymous with quality for many people, and its sophisticated shower gel scent is about as pleasant as it comes. Such a versatile scent that is neither loud, nor youthful, is sure to be a hit for men and possibly even women purchasing it for the men in their lives.", imageUrl: "https://i.pinimg.com/736x/23/9c/95/239c95cdd3363e53e3d0e261439b076c.jpg", price: 6500.00)
shoes2 = Product.create(title: "Rebecca Allen", description: "Rebecca Allen offers classic nude heels in an inclusive range of tones, as well as fun (but still wearable!) options, like these pink mules.", imageUrl: "https://di2ponv0v5otw.cloudfront.net/posts/2023/01/02/63b3968af14e9c129d7f8a86/m_63b3985a81078a02ecb8f39b.jpeg", price: 6000.50)
laptop2 = Product.create(title: "Samsung Galaxy Z Fold 4", description: "The Samsung Galaxy Z Fold 4 5G price in Kenya is Ksh 210,000. The device has a 7.6 inches Dynamic AMOLED 2X, 120Hz display that supports a screen resolution of 1812 x 2176 pixels. The cover screen has a 6.2 inches AMOLED 2X, 120Hz, Corning Gorilla Glass Victus+ display with a screen resolution of 904 x 2316 pixels.", imageUrl: "https://cdn1.smartprix.com/rx-iQ36VCbVT-w420-h420/samsung-galaxy-z-fol.webp", price: 62000.00)
furniture2 = Product.create(title: "Home office furniture", description: "These extremely versatile pieces of furniture are perfect for sitting on, lounging on, sleeping, and of course, hiding the tv remote. Whether a home can truly be a home without having a sofa might be up for debate depending on who you ask, however, a sofa is almost never a waste of space in the home.", imageUrl: "https://elegance.co.ke/pub/media/catalog/category/T/W/TW-0077_BS-812_-05.jpg", price: 70000.00)
clothing2 = Product.create(title: "Women's Kitenge", description: "African Kitenge Dresses 2 pieces skirt set Designs Women's Casual Wax Ankara Maxi Long Skirts Suit For Party Clothes.", imageUrl: "https://sc04.alicdn.com/kf/H99e460b3be9940408643a1ad80f5781f3.jpg", price: 4500.00)
book4 = Product.create(title: "Blood Meridian", description: "Written in 1985, Blood Meridian is set in the anarchic world opened up by Americas westward expansion. Through the hostile landscape of the TexasMexico border wanders the Kid, a fourteen year-old Tennessean who is quickly swept up in the relentless tide of blood.", imageUrl: "https://static.wikia.nocookie.net/althistory/images/a/a2/Blood_Meridian.jpg/revision/latest?cb=20220928155144", price: 3240.70)
furniture3 = Product.create(title: "Serpentine Sofa", description: "Vladimir Kagan is one of the favorite furniture designers from the 20th century. His mid-century modern pieces defined the curves of the era. In my own modern projects, curves tend to soften the sharp lines of the architecture, adding warmth and personality to the space.", imageUrl: "https://www.ikea.com/images/8d/63/8d633fd519dcd48e1730490d35d663b9.jpg?f=s", price: 25000.00)
book5 = Product.create(title: "Shaggie Bain", description: "Set in a poverty-stricken Glasgow in the early 1980s, Douglas Stuarts Booker Prize-winning debut is a heartbreaking story which lays bare the ruthlessness of poverty and the limits of love.", imageUrl: "https://m.media-amazon.com/images/I/51aclOGZ0NL.jpg", price: 7500.50)
laptop3 = Product.create(title: "Apple laptop", description: "The 16-inch MacBook Pro also includes a six-speaker sound system, longer battery life, Touch Bar, Touch ID, the Force Touch trackpad and the Apple T2 Security Chip.", imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80", price: 74000.00)
book6 = Product.create(title: "The line of beuty", description: "This Booker Prize-winning novel bottles the essence of the 1980s, as the story follows a quest for beauty against a backdrop of politics, greed and friendships turned toxic. When twenty-year-old Nick Guest moves into an attic room in the Notting Hill home of the wealthy Feddens he is innocent of politics and money.", imageUrl: "https://ik.imagekit.io/panmac/tr:di-placeholder_portrait_aMjPtD9YZ.jpg,tr:w-350,f-jpg,pr-true/edition/9781529077209.jpg", price: 5000.00)
furniture4 = Product.create(title: "George Gatsby", description: "George Nakashimas New lounge furniture is an iconic example of American-Japanese design. Through the use of a free-form arm, which accentuates the woods natural characteristics, he reveals natures beauty.", imageUrl: "https://contentimages.mybobs.com/fit-in/500x0/s/sys-master/images/h38/h3c/9225882501150/Dream%20outdoor-STL-ShopMoreLooks%20%CE%93%C3%87%C3%B4%203.jpg", price: 85000.00)
furniture5 = Product.create(title: "Eames Lounge", description:"Innovative: all foam. Designed for delivery as a flat pack—open the box, and the chair grows out of a flat disc. So cool. —Robert Finger, Fogarty Finger", imageUrl: "https://i.ytimg.com/vi/QUV-PNwaQ0o/maxresdefault.jpg", price: 72000.00)
furniture6 = Product.create(title: "Dinning set table", description: "This is the transition moment from old-fashioned, freestanding office furniture to the panel workstations loathed for decades. Modern, updated functional furniture focused on ergonomics and integrated equipment (files in the desktop, phone in the side).", imageUrl: "https://m.media-amazon.com/images/I/61MAzfI+4vL._SX425_.jpg", price: 50000)
furniture7 = Product.create(title: "Dinning set table", description: "A sublime avant-garde design, exclusive to B2C Furniture  tireless hours went into crafting these pieces from conceptualisation to construction", imageUrl: "https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/g/a/gaudi-modern-hardwood-7pce-dining-set-rustic-walnut-beige-fabric_1_.jpg", price: 87000)
book7 = Product.create(title: "Americanah", description: "Ifemelu and Obinze are young and in love. But when they both depart military-ruled Nigeria for the West, they are divided Ifemelu heads for America, while Obinze plunges into a dangerous, undocumented life in London.", imageUrl: "https://i0.wp.com/www.eelive.ng/wp-content/uploads/2020/10/Americanah.jpg?resize=800%2C800&ssl=1", price: 4000)
clothing3 = Product.create(title: "Women official clothings", description: "Formal Wear for Women - Choose from the exclusive range of women formal wear online at great price from Myntra. ✯Free Shipping ✯COD ✯Easy returns .", imageUrl: "https://netstorage-tuko.akamaized.net/images/0fgjhs34vnr5o3tbf.jpg", price: 5500.00)
clothing4 = Product.create(title: "Men official clothings", description: "Formal Wear · WES Formals by Westside Mauve Ultra Slim-Fit Shirt · WES Formals by Westside Navy Checkered Carrot Fit Trousers · Jainish Purple Regular Fit Self.", imageUrl: "https://ae01.alicdn.com/kf/HTB1Kg6uclGw3KVjSZFDq6xWEpXal/2018-men-s-fashion-Slim-suits-men-s-business-casual-clothing-groomsman-three-piece-suit-Blazers.jpg_640x640.jpg", price: 6520.00)
shoes3 = Product.create(title: "Balenciaga", description: "The Spanish fashion house Balenciaga is a luxury designer brand that produces footwear, ready-to-wear, accessories and ladies handbags. The company also licenses the brand name to Coty for its fragrances and is currently in the limelight for Sock Sneakers.", imageUrl: "https://i.ebayimg.com/images/g/SQcAAOSwaJVi85XJ/s-l1600.jpg", price: 7000.00)
shoes4 = Product.create(title: "New Balance Athletics", description: "New Balance Athletics is one of the best manufacturers of sports shoes, fitness clothing and accessories with products ranging from running sneakers, everyday sneakers, sports shoes for skateboarding, baseball and basketball, track pants, windbreakers.", imageUrl: "https://www.marketing91.com/wp-content/uploads/2023/01/New-Balance-Athletics-768x384.jpg", price: 7200.00)
clothing5 = Product.create(title: "Women casual look", description: "YP102 Spring/Summer Fashion Ripped Skinny Skinny Jeans Women's Pants.double protection: Nice toe design with double protection, can make the legs fall off more comfortable.", imageUrl: "https://ae01.alicdn.com/kf/H907dd4ae17fd4492a5b0871dc2b8b652g/YP102-Spring-Summer-Fashion-Ripped-Skinny-Skinny-Jeans-Women-s-Pants.jpg", price: 8900)
clothing6 = Product.create(title: "Women casual dress", description: "SIMPLEE LACE UP BACKLESS MESH DRESS WOMEN ELEGANT STRINGY SELVEDGE SASH MINI DRESS FASHION LONG FLARE SLEEVE DRESSES VESTIDOS.", imageUrl: "https://cdn.shopify.com/s/files/1/0035/3320/9669/products/product-image-758781590_600x.jpg?v=1573245206", price: 5000.00)
shoes5 = Product.create(title: "Reebok", description: "Customers can access Reebok shoes in various styles, shapes, sizes and designs. The high-quality materials with zigzag foam insoles make for a comfy feel for people that have to be on their feet for long hours.", imageUrl: "https://footwearnews.com/wp-content/uploads/2021/08/Kamikaze_II_Mens_Basketball_Shoes_White_GX6227_HM1.jpg?w=700&h=437&crop=1", price: 7250.00)
shoes6 = Product.create(title: "Puma shoes", description: "The German company Puma is one of the renowned sneakers brands and the third-largest manufacturer of sportswear in the world that manufactures and designs casual and athletic footwear, clothing and accessories.", imageUrl: "https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_482%2Cy_299/MTkzMzk4Nzg1NjcyNDg4NTE1/img_5389.jpg", price: 8900.00)
shoes7 = Product.create(title: "Skechers shoes", description: "Skechers designs, markets and develops performance and lifestyle shoes, clothing like jackets and accessories like socks for men, women, boys and girls. The company also offers comfort technologies like Relaxed Fit, Ultra-Go and Goga Mat etc.", imageUrl: "https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-landing-pages/skechers/2023/spring/skechers_deluxe_story2.jpg", price: 9230.20)
perfume3 = Product.create(title: "Armani Acqua", description: "The fragrance of the 90s and still relevant in the 2020s. A favorite among many of my friends, this perfume just doesnt age and keep its appeal almost 30 years later. While it is not as popular as it was in the 90s, Alberto Morillas genius is still very much appreciated to this day.", imageUrl: "https://cdn.shopify.com/s/files/1/0550/9716/3970/products/image_63170047-19d5-4c65-aceb-10d6af23ec51_2000x.jpg?v=1615878575", price: 18000.65)
perfume4 = Product.create(title: "Dior Miss Dior", description: "he bowed beauty, as I call it. I am certainly not surprised to see it on this list. This spicy rose scent is certainly something that I personally enjoy, so I understand why it is popular. Plus its a Dior, and they have a namesake that speaks for itself.", imageUrl: "https://img.grouponcdn.com/stores/S4hA3Rp6TLK1cDBxDfN8kAWMttk/storespi27387625-1602x961/v1/c870x524.jpg", price: 7600.50)
perfume5 = Product.create(title: "Marc Jacobs Daisy", description: "Irresistibly feminine, Daisy Marc Jacobs is the captivating creation of master perfumer Alberto Morillas.The effortless charm and youthful elegance of Marc Jacobs Daisy transports you to a place that is optimistic, beautiful and pure.", imageUrl: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/11537909317662/Eau-de-Toilette-for-her-1271410.jpg", price: 6500.00)
perfume6 = Product.create(title: "Bleu de Chanel", description: "Chanels name is synonymous with quality for many people, and its sophisticated shower gel scent is about as pleasant as it comes. Such a versatile scent that is neither loud, nor youthful, is sure to be a hit for men and possibly even women purchasing it for the men in their lives.", imageUrl: "https://i5.walmartimages.com/asr/f1d32e7a-c742-40fa-ba54-8acbbb3bcfaf_1.8db39a1414715cfb1766ddb9216c3715.jpeg", price: 7899.00)
perfume7 = Product.create(title: "Carolina Herrera Good Girl", description: "GOOD GIRL is a sensual, evocative fragrance born of the beautiful contradictions and the ever-present duality of modern women and modern life.GOOD GIRL is inspired by Carolina Herrera's unique vision of the duality of the modern woman: audacious.", imageUrl: "https://cdn.notinoimg.com/images/gallery/spage/CH_212_320x350px_20230220_41.jpg", price: 18000.00)



# Associate Products with Categories
ProductCategory.create(product_id: iphone.id, category_id: electronics.id)
ProductCategory.create(product_id: furniture5.id, category_id: furniture.id)
ProductCategory.create(product_id: clothing4.id, category_id: clothing.id)
ProductCategory.create(product_id: book4.id, category_id: books.id)
ProductCategory.create(product_id: ipad.id, category_id: electronics.id)
ProductCategory.create(product_id: macbook.id, category_id: electronics.id)
ProductCategory.create(product_id: perfume1.id, category_id: perfume.id)
ProductCategory.create(product_id: shoes3.id, category_id: shoes.id)
ProductCategory.create(product_id: furniture3.id, category_id: furniture.id)
ProductCategory.create(product_id: tshirt.id, category_id: clothing.id)
ProductCategory.create(product_id: perfume4.id, category_id: perfume.id)
ProductCategory.create(product_id: jeans.id, category_id: clothing.id)
ProductCategory.create(product_id: book1.id, category_id: books.id)
ProductCategory.create(product_id: shoes2.id, category_id: shoes.id)
ProductCategory.create(product_id: laptop1.id, category_id: electronics.id)
ProductCategory.create(product_id: clothing2.id, category_id: clothing.id)
ProductCategory.create(product_id: furniture1.id, category_id: furniture.id)
ProductCategory.create(product_id: perfume2.id, category_id: perfume.id)
ProductCategory.create(product_id: shoes1.id, category_id: shoes.id)
ProductCategory.create(product_id: clothing1.id, category_id: clothing.id)
ProductCategory.create(product_id: book2.id, category_id: books.id)
ProductCategory.create(product_id: laptop2.id, category_id: electronics.id)
ProductCategory.create(product_id: perfume5.id, category_id: perfume.id)
ProductCategory.create(product_id: shoes4.id, category_id: shoes.id)
ProductCategory.create(product_id: furniture2.id, category_id: furniture.id)
ProductCategory.create(product_id: book3.id, category_id: books.id)
ProductCategory.create(product_id: perfume3.id, category_id: perfume.id)
ProductCategory.create(product_id: shoes5.id, category_id: shoes.id)
ProductCategory.create(product_id: clothing3.id, category_id: clothing.id)
ProductCategory.create(product_id: furniture4.id, category_id: furniture.id)
ProductCategory.create(product_id: shoes6.id, category_id: shoes.id)
ProductCategory.create(product_id: book5.id, category_id: books.id)
ProductCategory.create(product_id: perfume6.id, category_id: perfume.id)
ProductCategory.create(product_id: laptop3.id, category_id: electronics.id)
ProductCategory.create(product_id: clothing5.id, category_id: clothing.id)
ProductCategory.create(product_id: furniture6.id, category_id: furniture.id)
ProductCategory.create(product_id: perfume7.id, category_id: perfume.id)
ProductCategory.create(product_id: shoes7.id, category_id: shoes.id)
ProductCategory.create(product_id: book6.id, category_id: books.id)
ProductCategory.create(product_id: clothing6.id, category_id: clothing.id)
ProductCategory.create(product_id: furniture7.id, category_id: furniture.id)
ProductCategory.create(product_id: book7.id, category_id: books.id)


# Associate Admins with Products
AdminProduct.create(admin_id: admin1.id, product_id: iphone.id)
AdminProduct.create(admin_id: admin3.id, product_id: ipad.id)
AdminProduct.create(admin_id: admin2.id, product_id: macbook.id)
AdminProduct.create(admin_id: admin2.id, product_id: book6.id)
AdminProduct.create(admin_id: admin1.id, product_id: shoes5.id)




# Create Carts
cart1 = Cart.create(user_id: user1.id)
cart2 = Cart.create(user_id: user2.id)

# Add Items to Carts
CartItem.create(cart_id: cart1.id, product_id: iphone.id, quantity: 1)
CartItem.create(cart_id: cart1.id, product_id: tshirt.id, quantity: 2)
CartItem.create(cart_id: cart2.id, product_id: book1.id, quantity: 3)
CartItem.create(cart_id: cart2.id, product_id: shoes5.id, quantity: 2)


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
payment1 = Payment.create(status: "successful", amount: 100.0, order_id: order1.id)
payment2 = Payment.create(status: "successful", amount: 50.0, order_id: order2.id)


puts "🌱Seeding done.🌱"
