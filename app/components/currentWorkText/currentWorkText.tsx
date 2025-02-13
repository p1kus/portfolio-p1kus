interface currentWorkProps {
  name: string,
  link: string,
}
export function CurrentWorkText({ name, link }: currentWorkProps) {
  return <a href={link}><p>Currently working on: <i><u>{name}</u></i></p></a>
}
