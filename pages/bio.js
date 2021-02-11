import Link from 'next/link'

export default function bio() {
    return (
        <div>
            <h2>about me</h2>
            <h3>
            <Link href='/'>
                <a>Back</a>
            </Link>
            </h3>

        </div>
    )
}
