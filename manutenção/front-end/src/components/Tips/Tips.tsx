import { Content } from './style'

interface propsTip {
  title: string;
  className?: string;
  children: JSX.Element,
}


function BoxTip(props: propsTip){
  return(
    <Content className={props.className}>
        {props.children}
        <span>{props.title}</span>
    </Content>
);
}


export default BoxTip;