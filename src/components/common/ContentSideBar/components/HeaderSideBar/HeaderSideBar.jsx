function HeaderSideBar({ title, icon }) {
    return (
         <div className='flex items-center gap-3 justify-center py-6 border-b'>
                {icon}
                <h2 className='tracking-widest text-lg font-medium'>{title}</h2>
            </div>
    );
}

export default HeaderSideBar;
