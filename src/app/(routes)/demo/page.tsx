'use client'
export default function Demo() {
    return (
        <div className="bg-slate-500 p-6 text-white" onClick={(e) => {
            console.log(e)
        }}>
            Demo here
        </div>
    );
}
