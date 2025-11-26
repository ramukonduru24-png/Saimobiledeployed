import { Link } from "react-router-dom";

interface CategoryCardProps {
  image: string;
  title: string;
  href: string;
}

const CategoryCard = ({ image, title, href }: CategoryCardProps) => {
  return (
    <Link to={href} className="block">
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-500 cursor-pointer border border-white/20 hover:-translate-y-2">
        <div className="aspect-[4/5] overflow-hidden relative">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform group-hover:translate-y-[-5px] transition-transform duration-500">
          <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">{title}</h3>
          <div className="w-16 h-0.5 bg-primary mx-auto group-hover:w-24 group-hover:bg-white transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
