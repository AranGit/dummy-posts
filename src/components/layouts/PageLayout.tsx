

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full min-h-full overflow-auto px-[24px] py-[50px]">
      {children}
    </div>
  )
}

export default PageLayout
