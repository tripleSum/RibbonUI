import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className="APP" style={{ margin: '50px' }}>
      <Button>123</Button>
      <Button type={ButtonType.Primary} onClick={()=>alert('hello')}>Hello Button</Button>
      <Button
        size={ButtonSize.Small}
        type={ButtonType.Link}
        disabled
        href='https://www.baidu.com'
        onClick={()=>alert('hello')}>
          Baidu Link
      </Button>
      <Button size={ButtonSize.Large} type={ButtonType.Danger}>Danger Large Button</Button>
    </div>
  )
}

export default App
