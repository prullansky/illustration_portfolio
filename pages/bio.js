import Link from 'next/link'

export default function bio() {
    return (
        <div>
            <h2>about me</h2>

            <img src='/photos/11458137305569121185.jpeg' />

            <h3>
            <Link href='/'>
                <a>Back</a>
            </Link>
            </h3>

        </div>
    )
}
