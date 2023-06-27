import { render } from "react-dom"
import FirstApp from "../src/FirstApp"

describe('Purebas en <FirstApp />', () => {
  test('debe hacer match con el snapshot', () => {
    
    render(<FirstApp/>)
  })
  
})
