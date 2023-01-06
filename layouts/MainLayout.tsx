import {FC, ReactElement, ReactNode} from "react";
import clsx from "clsx";
import LeftMenu from "../components/LeftMenu";
import SideComments from "../components/SideComments";


interface MainLayoutProps {
  children?: ReactNode,
  hideMenu?: boolean,
  hideComments?: boolean,
  contentFullWidth?: boolean,
  className?: string
}

const MainLayout: FC<MainLayoutProps> = ({
                                           children,
                                           contentFullWidth,
                                           hideMenu,
                                           hideComments,
                                           className
                                         }) => {

  return (
    <div className={clsx("wrapper", className)}>
      {!hideMenu && (
        <div className="leftSide">
          <LeftMenu/>
        </div>
      )}
      <div className={clsx("content", {"content--full": contentFullWidth})}>
        {children}
      </div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments/>
        </div>
      )}
    </div>
  )
}

export default MainLayout