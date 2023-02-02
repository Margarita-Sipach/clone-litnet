interface AvatarProps {
  image?: string
	name: string
	date: string
}

export const Avatar = ({ image, name, date }: AvatarProps) => {
  return (
		<div className="flex gap-3 items-center">
			<img
			src={image}
			alt=""
			className="h-8 w-8 object-cover rounded-sm sm:h-10 sm:w-10"
		/>
		<div className="text-sm">{name}</div>
		<div className="text-xs text-slate-400">{date}</div>
		</div>
		
  );
};
