export default function Demo() {
    return (
        <section className="px-4 pt-6 md:pt-12 pb-24 md:pb-48 md:px-8">
            <h2 className="text-center font-extrabold mb-6 md:mb-8 text-3xl md:text-5xl">
                Simple Setup Walkthrough
            </h2>
                <div className="md:border-2 md:p-2 md:rounded-2xl bg-base-200 border-primary/10 max-w-4xl mx-auto">
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg sm:rounded-xl">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="PoopUp demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
        </section>
    )
}