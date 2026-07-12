export default function PlaceholderSection({ id, title }) {
  return (
    <section 
      id={id} 
      className="h-screen w-full flex items-center justify-center bg-black border-t border-white/5 relative z-10"
    >
      <div className="text-center">
        <h2 className="text-4xl font-space font-bold text-white/40 mb-4">{title}</h2>
        <p className="text-white/20 font-inter">Content coming soon...</p>
      </div>
    </section>
  );
}
