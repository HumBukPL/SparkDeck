import Card from '@/components/Card'

// Temporary data for demonstration purposes, later to be replaced with real data fetching
const tempSparkData = [
  {
    title: 'OnePiece',
    featuredWords: ['react', 'nextjs', 'tailwind'],
    image: 'onepiece.webp',
  },
  {
    title: 'Naruto Shippuden',
    featuredWords: ['javascript', 'typescript', 'css'],
    image: 'naruto.jpg',
  },
  {
    title: 'Test of a very long title that should be truncated',
    featuredWords: ['html', 'webdev', 'frontend'],
  },
  {
    title: 'Spark 4',
    featuredWords: ['nodejs', 'express', 'backend'],
  },
  {
    title: 'Spark 5',
    featuredWords: ['database', 'sql', 'nosql'],
  },
]

export default function Home() {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tempSparkData.map((spark) => (
          <Card
            key={spark.title}
            title={spark.title}
            featuredWords={spark.featuredWords}
            image={spark.image}
          />
        ))}
      </div>
    </>
  )
}
