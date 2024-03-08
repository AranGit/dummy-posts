function UserAvatar({ displayName }: { displayName: string }) {
  // Not sure why but randome color not working with tailwind (bg-[randomColorValue])
  const randomColorValue = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const shortName = displayName.slice(0, 2).toUpperCase();

  return (
    <div className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full`} style={{ backgroundColor: randomColorValue }}>
      <span className="font-medium text-gray-600 dark:text-gray-300">{shortName}</span>
    </div>
  )
}

export default UserAvatar
