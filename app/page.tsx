
// import Header from '@/components/header'
// import Categories from '@/components/home/categories'
// import FeaturedBanner from '@/components/home/featured-banner'
// import CelebrationSection from '@/components/home/celebration-section'
// import FeaturedProducts from '@/components/home/featured-products'
// import StatsSection from '@/components/home/stats-section'
// import Footer from '@/components/footer'

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Header />
//       {/* <Categories /> */}
//       <FeaturedBanner />
//       {/* <CelebrationSection /> */}
//       <FeaturedProducts />
//       {/* <StatsSection /> */}
//       <Footer />
//     </main>
//   )
// }



import Header from '@/components/header'
import FeaturedBanner from '@/components/home/featured-banner'
import FeaturedProducts from '@/components/home/featured-products'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      <Header />
      <FeaturedBanner />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}
