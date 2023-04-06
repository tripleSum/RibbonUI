import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className="APP">
      <Button>Hello Button</Button>
      <Button type={ButtonType.Link} disabled href='https://www.baidu.com'>Baidu Link</Button>
      <Button size={ButtonSize.Large} type={ButtonType.Danger} disabled>Danger Button</Button>

    </div>
  )
}

export default App
