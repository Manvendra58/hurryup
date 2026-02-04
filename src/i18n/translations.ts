export type Lang = 'en' | 'hi'

export type TranslationKey =
  | 'lang.english'
  | 'lang.hindi'
  | 'nav.home'
  | 'nav.features'
  | 'nav.about'
  | 'nav.contact'
  | 'cta.getStarted'
  | 'cta.shopNow'
  | 'cta.startShopping'
  | 'cta.becomeSeller'
  | 'cta.startSelling'
  | 'cta.adminPortal'
  | 'auth.login'
  | 'auth.register'
  | 'auth.logout'
  | 'auth.welcomeUser'
  | 'auth.welcomeBack'
  | 'auth.loginToYourAccount'
  | 'auth.loginAs'
  | 'auth.registerAs'
  | 'auth.emailAddress'
  | 'auth.password'
  | 'auth.confirmPassword'
  | 'auth.fullName'
  | 'auth.createAccount'
  | 'auth.joinHurryUpToday'
  | 'auth.dontHaveAccount'
  | 'auth.registerHere'
  | 'auth.alreadyHaveAccount'
  | 'auth.loginHere'
  | 'auth.backToHome'
  | 'auth.error.fillAllFields'
  | 'auth.error.passwordsDoNotMatch'
  | 'auth.error.passwordMinChars'
  | 'auth.error.invalidCredentials'
  | 'auth.error.emailExists'
  | 'role.customer'
  | 'role.farmer'
  | 'role.admin'
  | 'customer.browseProducts'
  | 'customer.browseOrganicProducts'
  | 'cart.shoppingCart'
  | 'cart.empty'
  | 'cart.total'
  | 'cart.checkout'
  | 'product.addToCart'
  | 'product.buyNow'
  | 'product.outOfStock'
  | 'landing.organicFresh'
  | 'landing.titleLine1'
  | 'landing.titleLine2'
  | 'landing.subtitle1'
  | 'landing.subtitle2'
  | 'landing.customerCardTitle'
  | 'landing.customerCardDesc'
  | 'landing.customerBullet1'
  | 'landing.customerBullet2'
  | 'landing.customerBullet3'
  | 'landing.farmerCardTitle'
  | 'landing.farmerCardDesc'
  | 'landing.farmerBullet1'
  | 'landing.farmerBullet2'
  | 'landing.farmerBullet3'
  | 'landing.adminCardTitle'
  | 'landing.adminCardDesc'
  | 'landing.adminBullet1'
  | 'landing.adminBullet2'
  | 'landing.adminBullet3'
  | 'landing.featureOrganicTitle'
  | 'landing.featureOrganicDesc'
  | 'landing.featureDeliveryTitle'
  | 'landing.featureDeliveryDesc'
  | 'landing.featureSupportTitle'
  | 'landing.featureSupportDesc'
  | 'footer.tagline'
  | 'footer.product'
  | 'footer.company'
  | 'footer.connect'
  | 'footer.pricing'
  | 'footer.documentation'
  | 'footer.blog'
  | 'footer.careers'
  | 'common.contact'
  | 'common.features'
  | 'common.about'
  | 'common.twitter'
  | 'common.github'
  | 'hero.welcomeTo'
  | 'hero.subtitle'
  | 'hero.learnMore'
  | 'hero.lightningFast'
  | 'hero.lightningFastDesc'
  | 'features.powerfulTitle'
  | 'features.powerfulSubtitle'
  | 'admin.portal'
  | 'admin.totalFarmers'
  | 'admin.pendingVerification'
  | 'admin.verifiedFarmers'
  | 'admin.pendingProducts'
  | 'admin.farmerManagement'
  | 'admin.productManagement'
  | 'admin.platformStatistics'
  | 'admin.verify'
  | 'admin.reject'
  | 'admin.approve'
  | 'admin.revoke'
  | 'admin.revokeApproval'
  | 'admin.noVerifiedFarmers'
  | 'admin.noApprovedProducts'
  | 'farmer.portal'
  | 'farmer.totalProducts'
  | 'farmer.totalRevenue'
  | 'farmer.pendingOrders'
  | 'farmer.myProducts'
  | 'farmer.addProduct'
  | 'farmer.addNewProduct'
  | 'farmer.waitVerification'
  | 'farmer.productName'
  | 'farmer.category'
  | 'farmer.description'
  | 'farmer.pricePerKg'
  | 'farmer.stockKg'
  | 'farmer.icon'
  | 'common.cancel'
  | 'common.delete'
  | 'common.orders'
  | 'common.statistics'
  | 'common.total'
  | 'common.date'
  | 'common.customer'
  | 'common.stock'
  | 'farmer.noProductsYet'
  | 'farmer.noOrdersYet'
  | 'farmer.salesOverview'
  | 'farmer.productStatus'
  | 'farmer.averageOrderValue'
  | 'common.totalOrders'
  | 'common.approved'
  | 'common.pendingApproval'
  | 'common.approvedProducts'
  | 'admin.farmerStatistics'
  | 'admin.productStatistics'
  | 'common.approvalRate'
  | 'order.confirm'
  | 'order.markDelivered'
  | 'order.cancel'

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  en: {
    'lang.english': 'EN',
    'lang.hindi': 'हिंदी',
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.getStarted': 'Get Started',
    'cta.shopNow': 'Shop Now →',
    'cta.startShopping': 'Start Shopping 🛒',
    'cta.becomeSeller': 'Become a Seller 👨‍🌾',
    'cta.startSelling': 'Start Selling →',
    'cta.adminPortal': 'Admin Portal →',
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.logout': 'Logout',
    'auth.welcomeUser': 'Welcome,',
    'auth.welcomeBack': 'Welcome Back',
    'auth.loginToYourAccount': 'Login to your account',
    'auth.loginAs': 'Login As',
    'auth.registerAs': 'Register As',
    'auth.emailAddress': 'Email Address',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.fullName': 'Full Name',
    'auth.createAccount': 'Create Account',
    'auth.joinHurryUpToday': 'Join HurryUp today',
    'auth.dontHaveAccount': "Don't have an account?",
    'auth.registerHere': 'Register here',
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.loginHere': 'Login here',
    'auth.backToHome': 'Back to home',
    'auth.error.fillAllFields': 'Please fill in all fields',
    'auth.error.passwordsDoNotMatch': 'Passwords do not match',
    'auth.error.passwordMinChars': 'Password must be at least 6 characters',
    'auth.error.invalidCredentials': 'Invalid credentials. Please try again or register.',
    'auth.error.emailExists': 'Email already exists. Please login instead.',
    'role.customer': 'Customer',
    'role.farmer': 'Farmer',
    'role.admin': 'Admin',
    'customer.browseProducts': 'Browse Products',
    'customer.browseOrganicProducts': 'Browse Organic Products',
    'cart.shoppingCart': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total:',
    'cart.checkout': 'Checkout',
    'product.addToCart': '🛒 Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.outOfStock': '❌ Out of Stock',
    'landing.organicFresh': '🌱 ORGANIC & Fresh',
    'landing.titleLine1': 'Fresh Organic Vegetables',
    'landing.titleLine2': 'Direct from Farmers',
    'landing.subtitle1': 'Connect with local farmers and get the freshest organic vegetables delivered to your door.',
    'landing.subtitle2': 'Support local agriculture while enjoying healthy, chemical-free produce.',
    'landing.customerCardTitle': 'Customer',
    'landing.customerCardDesc': 'Browse and buy fresh organic vegetables directly from verified farmers. Easy shopping with secure checkout.',
    'landing.customerBullet1': 'Browse organic products',
    'landing.customerBullet2': 'Direct farmer connection',
    'landing.customerBullet3': 'Secure checkout',
    'landing.farmerCardTitle': 'Farmer',
    'landing.farmerCardDesc': 'Sell your organic produce directly to customers. Manage your inventory and grow your business.',
    'landing.farmerBullet1': 'List your products',
    'landing.farmerBullet2': 'Manage orders',
    'landing.farmerBullet3': 'Track sales',
    'landing.adminCardTitle': 'Admin',
    'landing.adminCardDesc': 'Manage the platform, verify farmers, and ensure quality standards for all organic products.',
    'landing.adminBullet1': 'Verify farmers',
    'landing.adminBullet2': 'Manage platform',
    'landing.adminBullet3': 'Monitor activities',
    'landing.featureOrganicTitle': 'ORGANIC',
    'landing.featureOrganicDesc': 'Verified organic produce from trusted farmers',
    'landing.featureDeliveryTitle': 'Direct Delivery',
    'landing.featureDeliveryDesc': 'Fresh vegetables delivered directly to your door',
    'landing.featureSupportTitle': 'Support Local',
    'landing.featureSupportDesc': 'Help local farmers and sustainable agriculture',
    'footer.tagline': 'Building modern, fast, and beautiful frontend experiences.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.connect': 'Connect',
    'footer.pricing': 'Pricing',
    'footer.documentation': 'Documentation',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'common.contact': 'Contact',
    'common.features': 'Features',
    'common.about': 'About',
    'common.twitter': 'Twitter',
    'common.github': 'GitHub',
    'hero.welcomeTo': 'Welcome to',
    'hero.subtitle': 'Build amazing experiences with our modern, fast, and beautiful frontend. Get started in minutes and create something extraordinary.',
    'hero.learnMore': 'Learn More',
    'hero.lightningFast': 'Lightning Fast',
    'hero.lightningFastDesc': 'Built with modern technologies for optimal performance',
    'features.powerfulTitle': 'Powerful Features',
    'features.powerfulSubtitle': 'Everything you need to build a modern, scalable frontend application',
    'admin.portal': 'Admin Portal',
    'admin.totalFarmers': 'Total Farmers',
    'admin.pendingVerification': 'Pending Verification',
    'admin.verifiedFarmers': 'Verified Farmers',
    'admin.pendingProducts': 'Pending Products',
    'admin.farmerManagement': 'Farmer Management',
    'admin.productManagement': 'Product Management',
    'admin.platformStatistics': 'Platform Statistics',
    'admin.verify': '✓ Verify',
    'admin.reject': 'Reject',
    'admin.approve': '✓ Approve',
    'admin.revoke': 'Revoke',
    'admin.revokeApproval': 'Revoke Approval',
    'admin.noVerifiedFarmers': 'No verified farmers yet.',
    'admin.noApprovedProducts': 'No approved products yet.',
    'farmer.portal': 'Farmer Portal',
    'farmer.totalProducts': 'Total Products',
    'farmer.totalRevenue': 'Total Revenue',
    'farmer.pendingOrders': 'Pending Orders',
    'farmer.myProducts': 'My Products',
    'farmer.addProduct': '+ Add Product',
    'farmer.addNewProduct': 'Add New Product',
    'farmer.waitVerification': 'Please wait for admin verification to add products',
    'farmer.productName': 'Product Name',
    'farmer.category': 'Category',
    'farmer.description': 'Description',
    'farmer.pricePerKg': 'Price (₹/kg)',
    'farmer.stockKg': 'Stock (kg)',
    'farmer.icon': 'Icon',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.orders': 'Orders',
    'common.statistics': 'Statistics',
    'common.total': 'Total',
    'common.date': 'Date',
    'common.customer': 'Customer',
    'common.stock': 'Stock',
    'farmer.noProductsYet': 'No products yet. Add your first product!',
    'farmer.noOrdersYet': 'No orders yet.',
    'farmer.salesOverview': 'Sales Overview',
    'farmer.productStatus': 'Product Status',
    'farmer.averageOrderValue': 'Average Order Value',
    'common.totalOrders': 'Total Orders',
    'common.approved': 'Approved',
    'common.pendingApproval': 'Pending Approval',
    'common.approvedProducts': 'Approved Products',
    'admin.farmerStatistics': 'Farmer Statistics',
    'admin.productStatistics': 'Product Statistics',
    'common.approvalRate': 'Approval Rate',
    'order.confirm': 'Confirm',
    'order.markDelivered': 'Mark as Delivered',
    'order.cancel': 'Cancel Order',
  },
  hi: {
    'lang.english': 'EN',
    'lang.hindi': 'हिंदी',
    'nav.home': 'होम',
    'nav.features': 'विशेषताएँ',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'cta.getStarted': 'शुरू करें',
    'cta.shopNow': 'अभी खरीदें →',
    'cta.startShopping': 'खरीदारी शुरू करें 🛒',
    'cta.becomeSeller': 'विक्रेता बनें 👨‍🌾',
    'cta.startSelling': 'बेचना शुरू करें →',
    'cta.adminPortal': 'एडमिन पोर्टल →',
    'auth.login': 'लॉगिन',
    'auth.register': 'रजिस्टर',
    'auth.logout': 'लॉगआउट',
    'auth.welcomeUser': 'स्वागत है,',
    'auth.welcomeBack': 'वापसी पर स्वागत है',
    'auth.loginToYourAccount': 'अपने खाते में लॉगिन करें',
    'auth.loginAs': 'के रूप में लॉगिन',
    'auth.registerAs': 'के रूप में रजिस्टर',
    'auth.emailAddress': 'ईमेल पता',
    'auth.password': 'पासवर्ड',
    'auth.confirmPassword': 'पासवर्ड पुष्टि',
    'auth.fullName': 'पूरा नाम',
    'auth.createAccount': 'खाता बनाएँ',
    'auth.joinHurryUpToday': 'आज ही HurryUp से जुड़ें',
    'auth.dontHaveAccount': 'खाता नहीं है?',
    'auth.registerHere': 'यहाँ रजिस्टर करें',
    'auth.alreadyHaveAccount': 'पहले से खाता है?',
    'auth.loginHere': 'यहाँ लॉगिन करें',
    'auth.backToHome': 'होम पर वापस',
    'auth.error.fillAllFields': 'कृपया सभी फ़ील्ड भरें',
    'auth.error.passwordsDoNotMatch': 'पासवर्ड मेल नहीं खाते',
    'auth.error.passwordMinChars': 'पासवर्ड कम से कम 6 अक्षर का होना चाहिए',
    'auth.error.invalidCredentials': 'गलत जानकारी। कृपया फिर कोशिश करें या रजिस्टर करें।',
    'auth.error.emailExists': 'यह ईमेल पहले से मौजूद है। कृपया लॉगिन करें।',
    'role.customer': 'ग्राहक',
    'role.farmer': 'किसान',
    'role.admin': 'एडमिन',
    'customer.browseProducts': 'उत्पाद देखें',
    'customer.browseOrganicProducts': 'ऑर्गेनिक उत्पाद देखें',
    'cart.shoppingCart': 'शॉपिंग कार्ट',
    'cart.empty': 'आपकी कार्ट खाली है',
    'cart.total': 'कुल:',
    'cart.checkout': 'चेकआउट',
    'product.addToCart': '🛒 कार्ट में जोड़ें',
    'product.buyNow': 'अभी खरीदें',
    'product.outOfStock': '❌ स्टॉक समाप्त',
    'landing.organicFresh': '🌱 ऑर्गेनिक और ताज़ा',
    'landing.titleLine1': 'ताज़ी ऑर्गेनिक सब्ज़ियाँ',
    'landing.titleLine2': 'सीधे किसानों से',
    'landing.subtitle1': 'स्थानीय किसानों से जुड़ें और सबसे ताज़ी ऑर्गेनिक सब्ज़ियाँ अपने दरवाज़े तक पाएं।',
    'landing.subtitle2': 'स्वस्थ, रसायन-मुक्त उत्पादों के साथ स्थानीय कृषि का समर्थन करें।',
    'landing.customerCardTitle': 'ग्राहक',
    'landing.customerCardDesc': 'सत्यापित किसानों से सीधे ताज़ी ऑर्गेनिक सब्ज़ियाँ देखें और खरीदें। सुरक्षित चेकआउट के साथ आसान खरीदारी।',
    'landing.customerBullet1': 'ऑर्गेनिक उत्पाद देखें',
    'landing.customerBullet2': 'किसान से सीधा संपर्क',
    'landing.customerBullet3': 'सुरक्षित चेकआउट',
    'landing.farmerCardTitle': 'किसान',
    'landing.farmerCardDesc': 'अपना ऑर्गेनिक उत्पादन सीधे ग्राहकों को बेचें। स्टॉक मैनेज करें और अपना व्यवसाय बढ़ाएँ।',
    'landing.farmerBullet1': 'अपने उत्पाद सूचीबद्ध करें',
    'landing.farmerBullet2': 'ऑर्डर मैनेज करें',
    'landing.farmerBullet3': 'सेल्स ट्रैक करें',
    'landing.adminCardTitle': 'एडमिन',
    'landing.adminCardDesc': 'प्लेटफ़ॉर्म मैनेज करें, किसानों को सत्यापित करें और ऑर्गेनिक गुणवत्ता सुनिश्चित करें।',
    'landing.adminBullet1': 'किसानों को सत्यापित करें',
    'landing.adminBullet2': 'प्लेटफ़ॉर्म मैनेज करें',
    'landing.adminBullet3': 'गतिविधियाँ मॉनिटर करें',
    'landing.featureOrganicTitle': 'ऑर्गेनिक',
    'landing.featureOrganicDesc': 'विश्वसनीय किसानों से सत्यापित ऑर्गेनिक उत्पाद',
    'landing.featureDeliveryTitle': 'सीधी डिलीवरी',
    'landing.featureDeliveryDesc': 'ताज़ी सब्ज़ियाँ सीधे आपके दरवाज़े तक',
    'landing.featureSupportTitle': 'लोकल सपोर्ट',
    'landing.featureSupportDesc': 'स्थानीय किसानों और टिकाऊ कृषि का समर्थन करें',
    'footer.tagline': 'आधुनिक, तेज़ और सुंदर फ्रंटएंड अनुभव बनाएं।',
    'footer.product': 'प्रोडक्ट',
    'footer.company': 'कंपनी',
    'footer.connect': 'कनेक्ट',
    'footer.pricing': 'कीमतें',
    'footer.documentation': 'डॉक्यूमेंटेशन',
    'footer.blog': 'ब्लॉग',
    'footer.careers': 'करियर',
    'common.contact': 'संपर्क',
    'common.features': 'विशेषताएँ',
    'common.about': 'हमारे बारे में',
    'common.twitter': 'ट्विटर',
    'common.github': 'गिटहब',
    'hero.welcomeTo': 'स्वागत है',
    'hero.subtitle': 'हमारे आधुनिक, तेज़ और सुंदर फ्रंटएंड के साथ शानदार अनुभव बनाएं। कुछ ही मिनटों में शुरू करें और कुछ खास बनाएं।',
    'hero.learnMore': 'और जानें',
    'hero.lightningFast': 'बहुत तेज़',
    'hero.lightningFastDesc': 'बेहतरीन प्रदर्शन के लिए आधुनिक तकनीकों से बनाया गया',
    'features.powerfulTitle': 'शानदार विशेषताएँ',
    'features.powerfulSubtitle': 'एक आधुनिक और स्केलेबल फ्रंटएंड ऐप बनाने के लिए सब कुछ',
    'admin.portal': 'एडमिन पोर्टल',
    'admin.totalFarmers': 'कुल किसान',
    'admin.pendingVerification': 'लंबित सत्यापन',
    'admin.verifiedFarmers': 'सत्यापित किसान',
    'admin.pendingProducts': 'लंबित उत्पाद',
    'admin.farmerManagement': 'किसान प्रबंधन',
    'admin.productManagement': 'उत्पाद प्रबंधन',
    'admin.platformStatistics': 'प्लेटफ़ॉर्म आँकड़े',
    'admin.verify': '✓ सत्यापित करें',
    'admin.reject': 'अस्वीकार',
    'admin.approve': '✓ स्वीकृत करें',
    'admin.revoke': 'रद्द करें',
    'admin.revokeApproval': 'स्वीकृति रद्द करें',
    'admin.noVerifiedFarmers': 'अभी कोई सत्यापित किसान नहीं है।',
    'admin.noApprovedProducts': 'अभी कोई स्वीकृत उत्पाद नहीं है।',
    'farmer.portal': 'किसान पोर्टल',
    'farmer.totalProducts': 'कुल उत्पाद',
    'farmer.totalRevenue': 'कुल कमाई',
    'farmer.pendingOrders': 'लंबित ऑर्डर',
    'farmer.myProducts': 'मेरे उत्पाद',
    'farmer.addProduct': '+ उत्पाद जोड़ें',
    'farmer.addNewProduct': 'नया उत्पाद जोड़ें',
    'farmer.waitVerification': 'उत्पाद जोड़ने के लिए एडमिन सत्यापन का इंतज़ार करें',
    'farmer.productName': 'उत्पाद का नाम',
    'farmer.category': 'श्रेणी',
    'farmer.description': 'विवरण',
    'farmer.pricePerKg': 'कीमत (₹/किलो)',
    'farmer.stockKg': 'स्टॉक (किलो)',
    'farmer.icon': 'आइकन',
    'common.cancel': 'रद्द करें',
    'common.delete': 'हटाएँ',
    'common.orders': 'ऑर्डर',
    'common.statistics': 'आँकड़े',
    'common.total': 'कुल',
    'common.date': 'तारीख',
    'common.customer': 'ग्राहक',
    'common.stock': 'स्टॉक',
    'farmer.noProductsYet': 'अभी कोई उत्पाद नहीं है। अपना पहला उत्पाद जोड़ें!',
    'farmer.noOrdersYet': 'अभी कोई ऑर्डर नहीं है।',
    'farmer.salesOverview': 'सेल्स ओवरव्यू',
    'farmer.productStatus': 'उत्पाद स्थिति',
    'farmer.averageOrderValue': 'औसत ऑर्डर मूल्य',
    'common.totalOrders': 'कुल ऑर्डर',
    'common.approved': 'स्वीकृत',
    'common.pendingApproval': 'लंबित स्वीकृति',
    'common.approvedProducts': 'स्वीकृत उत्पाद',
    'admin.farmerStatistics': 'किसान आँकड़े',
    'admin.productStatistics': 'उत्पाद आँकड़े',
    'common.approvalRate': 'स्वीकृति दर',
    'order.confirm': 'कन्फर्म करें',
    'order.markDelivered': 'डिलीवर मार्क करें',
    'order.cancel': 'ऑर्डर रद्द करें',
  },
}

