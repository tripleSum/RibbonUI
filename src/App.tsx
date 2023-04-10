import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className="APP" style={{ margin: '50px' }}>
      <Button disabled>123</Button>
      <Button disabled type={ButtonType.Primary}>Hello Button</Button>
      <Button size={ButtonSize.Small} type={ButtonType.Link} disabled href='https://www.baidu.com'>Baidu Link</Button>
      <Button size={ButtonSize.Large} type={ButtonType.Danger} disabled>Danger Large Button</Button>
    </div>
  )
}

export default App
