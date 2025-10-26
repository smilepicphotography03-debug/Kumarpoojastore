import { ShoppingBag, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function App() {
  const featuredProducts = [
    {
      name: 'Gopuram Meenakshi Kumkum',
      tagline: 'Pure temple-grade kumkum',
      price: '₹45',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Premium Dhoop Cups',
      tagline: 'Long-lasting fragrance',
      price: '₹120',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Rudraksha Malai',
      tagline: 'Authentic 108 beads',
      price: '₹850',
      image: 'https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Pancha Deepam Oil',
      tagline: 'Traditional lamp oil blend',
      price: '₹180',
      image: 'https://images.pexels.com/photos/3979193/pexels-photo-3979193.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Sandalwood Tablets',
      tagline: 'Pure chandan for tilak',
      price: '₹320',
      image: 'https://images.pexels.com/photos/4040629/pexels-photo-4040629.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Cotton Wicks Bundle',
      tagline: 'Handmade traditional wicks',
      price: '₹35',
      image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const traditionalItems = [
    { name: 'Turmeric Powder', price: '₹80', image: 'https://images.pexels.com/photos/4198367/pexels-photo-4198367.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Sandalwood Tablets', price: '₹320', image: 'https://images.pexels.com/photos/4040629/pexels-photo-4040629.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Nalangu Maavu', price: '₹95', image: 'https://images.pexels.com/photos/4198377/pexels-photo-4198377.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Pure Neem Oil', price: '₹140', image: 'https://images.pexels.com/photos/4198451/pexels-photo-4198451.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  const spiritualAccessories = [
    { name: 'Rudraksha Malai', price: '₹850', image: 'https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Tulasi Malai', price: '₹250', image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Cotton Wicks', price: '₹35', image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Vilaku Ghee', price: '₹220', image: 'https://images.pexels.com/photos/3979193/pexels-photo-3979193.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed top-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Kumar Pooja Store</h1>
                <p className="text-xs text-zinc-400">Authentic South Indian Traditions</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#products" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">Products</a>
              <a href="#about" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#contact" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">Contact</a>
            </nav>
            <a
              href="https://wa.me/919489657260"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-orange-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              WhatsApp Order
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23f97316' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                <span className="text-orange-500 font-semibold text-sm">Since 1968 • Trusted Quality</span>
              </div>
              <h2 className="text-6xl font-bold leading-tight">
                Kumar Pooja<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Store</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Authentic Pooja Essentials & Traditional Products
              </p>
              <p className="text-zinc-500">
                Experience divine traditions with our carefully curated collection of 55+ authentic South Indian pooja items. From sacred kumkum to premium incense, every product honors our rich spiritual heritage.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#products"
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now
                </a>
                <a
                  href="#about"
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-bold border border-zinc-700 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">55+</div>
                  <div className="text-sm text-zinc-400 mt-1">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-sm text-zinc-400 mt-1">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">10k+</div>
                  <div className="text-sm text-zinc-400 mt-1">Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Kumkum" className="w-full h-48 object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images.pexels.com/photos/4040629/pexels-photo-4040629.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sandalwood" className="w-full h-64 object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images.pexels.com/photos/3979193/pexels-photo-3979193.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Oil Lamp" className="w-full h-64 object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dhoop" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Bestsellers</span>
            <h3 className="text-5xl font-bold mt-4 mb-6">Featured Products</h3>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Handpicked essentials for your daily pooja and special occasions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden bg-zinc-800">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{product.name}</h4>
                  <p className="text-zinc-400 text-sm mb-4">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                    <a
                      href={`https://wa.me/919489657260?text=I'm interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-transparent to-orange-950/30"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Pure & Traditional</span>
            <h3 className="text-5xl font-bold mt-4 mb-6">Traditional Oils & Powders</h3>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Premium quality ingredients for your sacred rituals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditionalItems.map((item, index) => (
              <div key={index} className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-3">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-500">{item.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Sacred Collection</span>
            <h3 className="text-5xl font-bold mt-4 mb-6">Spiritual Accessories</h3>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Complete your spiritual practice with authentic accessories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spiritualAccessories.map((item, index) => (
              <div key={index} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-3">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-500">{item.price}</span>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-orange-950/10 to-zinc-950">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 40 L90 40 L67 57 L77 87 L50 70 L23 87 L33 57 L10 40 L40 40 Z' fill='%23f97316' fill-opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Sacred Traditions</span>
            <h3 className="text-5xl font-bold mt-4 mb-6">Hindu Festivals</h3>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
              The Eternal Celebration of Faith — honoring deities, nature, virtues, and cosmic cycles. Each festival carries deep meaning, reminding us of divine values, victory of good over evil, and gratitude toward life's blessings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { icon: '🪔', name: 'Makara Sankranti / Pongal', desc: 'Harvest festival thanking Surya for abundance. Families prepare Pongal and decorate homes with kolam.' },
              { icon: '🪷', name: 'Thai Poosam', desc: 'Dedicated to Lord Murugan. Devotees carry kavadi seeking blessings for strength and purification.' },
              { icon: '🌙', name: 'Maha Shivaratri', desc: 'Sacred night of Lord Shiva. Devotees fast and chant, symbolizing the awakening of spiritual power.' },
              { icon: '🎨', name: 'Holi', desc: 'Festival of colors celebrating joy, unity, and triumph of good over evil with vibrant celebrations.' },
              { icon: '🕉️', name: 'Rama Navami', desc: 'Birth of Lord Rama, embodiment of virtue. Devotees celebrate the ideals of truth and dharma.' },
              { icon: '🌼', name: 'Hanuman Jayanti', desc: 'Honors Lord Hanuman\'s devotion and courage. Worshipers seek blessings for strength and perseverance.' },
              { icon: '🌿', name: 'Tamil New Year', desc: 'Marks renewal of time and solar cycle with rituals symbolizing hope and auspicious beginnings.' },
              { icon: '🔥', name: 'Narasimha Jayanti', desc: 'Celebrates Vishnu\'s fierce avatar, representing divine protection and fearlessness.' },
              { icon: '🌊', name: 'Ganga Dussehra', desc: 'Festival of purity marking Ganga\'s descent. Bathing symbolizes inner cleansing and renewal.' },
              { icon: '🛕', name: 'Rath Yatra', desc: 'Grand chariot procession of Lord Jagannath spreading blessings of love and service.' },
              { icon: '🌺', name: 'Guru Purnima', desc: 'Day to honor teachers who guide us toward enlightenment through gratitude and humility.' },
              { icon: '💧', name: 'Aadi Perukku', desc: 'Honors water\'s life-giving power along riverbanks, symbolizing abundance and fertility.' },
              { icon: '🐍', name: 'Nag Panchami', desc: 'Dedicated to serpent deities. Offerings symbolize respect for nature\'s unseen forces.' },
              { icon: '💰', name: 'Varalakshmi Vratham', desc: 'Women worship Goddess Lakshmi seeking blessings for prosperity and household harmony.' },
              { icon: '🪔', name: 'Krishna Janmashtami', desc: 'Celebration of Lord Krishna\'s birth — the divine teacher of love and wisdom.' },
              { icon: '🔱', name: 'Aavani Avittam', desc: 'Renewal ceremony signifying purification and recommitment to spiritual study.' },
              { icon: '🐘', name: 'Ganesh Chaturthi', desc: 'Birth of Lord Ganesha, remover of obstacles and symbol of wisdom and new beginnings.' },
              { icon: '⚔️', name: 'Navratri & Durga Puja', desc: 'Nine nights devoted to Goddess Durga celebrating courage, purity, knowledge, and grace.' },
              { icon: '🏹', name: 'Vijayadashami', desc: 'Lord Rama\'s victory over Ravana, symbolizing triumph of righteousness over evil.' },
              { icon: '🌙', name: 'Karva Chauth', desc: 'Day of devotion where married women fast for their husbands\' well-being until moonrise.' },
              { icon: '🪔', name: 'Diwali / Deepavali', desc: 'Festival of Lights symbolizing victory of light over darkness and knowledge over ignorance.' },
              { icon: '🔥', name: 'Karthigai Deepam', desc: 'Tamil festival of divine light. Lamps signify enlightenment and divine presence.' },
              { icon: '🌕', name: 'Dev Deepavali', desc: 'The gods\' own Diwali in Varanasi. Ganga\'s ghats glow with thousands of lamps.' },
              { icon: '📜', name: 'Gita Jayanti', desc: 'Day Krishna delivered the Bhagavad Gita — timeless message on life, duty, and devotion.' },
              { icon: '🎶', name: 'Margazhi Month', desc: 'Most sacred month for devotion, early morning worship, bhajans, and inner peace.' }
            ].map((festival, index) => (
              <div key={index} className="group bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {festival.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
                      {festival.name}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {festival.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-zinc-900/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-orange-500/30 shadow-2xl shadow-orange-500/10">
              <p className="text-zinc-300 text-lg font-semibold mb-2">
                Celebrate Every Festival with Authentic Pooja Items
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                From kumkum to ghee wicks — we have everything you need for your sacred rituals
              </p>
              <a
                href="https://wa.me/919489657260?text=I need pooja items for upcoming festival"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Order Festival Essentials
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/20 via-amber-950/20 to-orange-950/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-12 border border-zinc-800 shadow-2xl">
              <div className="text-center mb-8">
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h3 className="text-4xl font-bold mt-4 mb-6">About Kumar Pooja Store</h3>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed text-center mb-8">
                Serving Alangulam and beyond since 1968, Kumar Pooja Store has been the trusted source for authentic South Indian pooja essentials. With over 55 carefully curated products, we honor our rich spiritual heritage by providing only the highest quality traditional items. Every product is selected with devotion and tested for authenticity, ensuring that your sacred rituals are performed with genuine materials that respect our ancient traditions.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Quality Products</h4>
                  <p className="text-zinc-400 text-sm">Handpicked authentic items</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">50+ Years</h4>
                  <p className="text-zinc-400 text-sm">Trusted tradition</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
                  <p className="text-zinc-400 text-sm">Quick WhatsApp orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h3 className="text-5xl font-bold mt-4 mb-6">Contact Us</h3>
            <p className="text-zinc-400 text-lg">Visit our store or reach out for quick orders</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phone</h4>
                    <p className="text-zinc-400 mb-1">94898 30438</p>
                    <p className="text-zinc-400">94896 57260</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email</h4>
                    <p className="text-zinc-400">kumarpoojastore@gmail.com</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/jsHqrF89j5cmVFXn8"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Location</h4>
                    <p className="text-zinc-400">Ambai Rd, Opp. TPV Multiplex<br />Alangulam, Tamil Nadu</p>
                    <p className="text-orange-500 text-sm mt-2 font-semibold">View on Google Maps →</p>
                  </div>
                </div>
              </a>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Opening Hours</h4>
                    <p className="text-zinc-400">Monday - Sunday</p>
                    <p className="text-orange-500 font-semibold">7:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-2xl">
              <h4 className="text-2xl font-bold mb-6">Quick Order via WhatsApp</h4>
              <p className="text-zinc-400 mb-6">
                Get instant responses and place your orders directly through WhatsApp for the fastest service.
              </p>
              <a
                href="https://wa.me/919489657260"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
              >
                <Send className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <div className="mt-8 pt-8 border-t border-zinc-800">
                <p className="text-zinc-500 text-sm text-center">
                  Orders placed before 6 PM are typically processed the same day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Kumar Pooja Store</h5>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Your trusted source for authentic South Indian pooja essentials since 1968.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">Home</a></li>
                <li><a href="#products" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">Products</a></li>
                <li><a href="#about" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">About</a></li>
                <li><a href="#contact" className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Contact</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-zinc-400">
                  <Phone className="w-4 h-4 text-orange-500" />
                  94898 30438
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <Phone className="w-4 h-4 text-orange-500" />
                  94896 57260
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <Mail className="w-4 h-4 text-orange-500" />
                  kumarpoojastore@gmail.com
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Opening Hours</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Monday - Sunday</span>
                </div>
                <div className="text-orange-500 font-semibold">
                  7:00 AM - 10:00 PM
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-400 text-sm text-center md:text-left">
                Copyright © 2025 Kumar Pooja Store. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 text-sm">Made with devotion in Alangulam</span>
                <span className="text-orange-500">🙏</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
