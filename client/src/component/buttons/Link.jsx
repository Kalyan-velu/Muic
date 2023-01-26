import { Link as RouterLink ,NavLink as Nav} from "react-router-dom";

export const Link=({to,className,style,children})=>{
   
   var LinkStyle={
      textDecoration:"none",
      cursor:"pointer"
   }
   if(style == null)
      var routerStyle=LinkStyle;
   else
      var routerStyle2=Object.assign(style,LinkStyle)
   
   return (
      <RouterLink to={to} className={className} style={routerStyle || routerStyle2}>{children}</RouterLink>
   )
}

export const NavLink=({to,className,style,children})=>{
   
   var LinkStyle={
      textDecoration:"none",
      cursor:"pointer"
   }
   if(style == null)
      var routerStyle=LinkStyle;
   else
      var routerStyle2=Object.assign(style,LinkStyle)
   
   return (
      <RouterLink to={to} className={className} style={routerStyle || routerStyle2}>{children}</RouterLink>
   )
}
