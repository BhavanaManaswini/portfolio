const Glow = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative rounded-lg overflow-hidden bg-[#000] border-2 border-border-Reverse">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#16537e] via-[#c90076] to-[#990000] 
                        opacity-50 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" />
            <div className="relative z-10 p-2 text-white flex justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default Glow;
