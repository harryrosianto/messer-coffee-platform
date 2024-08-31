export default function Footer() {
    return (
        <footer className="bg-[#5f6f52] shadow-inner mt-0">
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <div className="text-left">
                        <h2 className="text-[#fefae0] font-semibold">Contact Us</h2>
                        <p className="text-[#fefae0]">Email: admin@mesercoffee.org</p>
                        <p className="text-[#fefae0]">Phone: +62 851-5634-3145</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-[#fefae0] hover:text-[#c4661f]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.85 7.93 9.77v-6.91H7.89v-2.85h2.04v-2.17c0-2.02 1.2-3.12 3.03-3.12.88 0 1.8.15 1.8.15v1.98h-1.02c-1.01 0-1.33.63-1.33 1.27v1.9h2.27l-.36 2.85h-1.91V22C18.56 20.85 22 16.84 22 12z" />
                            </svg>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-[#fefae0] hover:text-[#c4661f]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20c7.55 0 11.67-6.3 11.67-11.77v-.54C20.36 6.95 21 6.15 21.45 5.23c-.72.33-1.5.55-2.31.65.84-.53 1.48-1.37 1.79-2.37-.78.48-1.64.82-2.56 1-.73-.77-1.78-1.25-2.93-1.25-2.23 0-4.05 1.86-4.05 4.15 0 .33.03.65.1.96C7.72 7.71 4.09 5.8 1.64 2.91c-.36.63-.56 1.35-.56 2.11 0 1.45.73 2.73 1.84 3.47-.65-.02-1.25-.2-1.77-.49v.05c0 2.03 1.41 3.73 3.29 4.12-.35.1-.71.14-1.08.14-.27 0-.52-.02-.78-.07.52 1.7 2.03 2.95 3.82 2.98-1.4 1.12-3.16 1.79-5.07 1.79-.33 0-.65-.02-.97-.06 1.81 1.2 3.96 1.88 6.27 1.88" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-[#fefae0] hover:text-[#c4661f]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zM12 6.75A5.25 5.25 0 1 0 17.25 12 5.25 5.25 0 0 0 12 6.75zM12 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm4.25-6.25a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-[#fefae0] hover:text-[#c4661f]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55A.55.55 0 0 0 20.45 3zM7.23 18H5.07V9h2.16zm-1.08-10.08A1.25 1.25 0 1 1 7.4 6.67 1.25 1.25 0 0 1 6.15 7.92zM19 18h-2.16v-4.24c0-1-.36-1.68-1.27-1.68-.69 0-1.1.47-1.28.92-.07.16-.09.4-.09.63V18h-2.16v-6h2.16v.82h.03c.29-.45.82-1.09 1.99-1.09 1.45 0 2.54.94 2.54 2.96z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="text-center text-[#fefae0] mt-4">
                    © {new Date().getFullYear()} meserCoffee AI Platform. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
