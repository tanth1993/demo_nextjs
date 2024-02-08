import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="flex justify-center p-24">
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body">
                    <h2 className="card-title">Not Found!</h2>
                    <p>Could not find requested resource</p>
                    <div className="card-actions justify-end">
                        <Link href="/">
                            <button className="btn btn-primary">Return Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}