import React from 'react'
import './Footer.css'
import { Layout } from 'antd'
const { Footer: FooterAnt } = Layout;

export default function Footer () {
  return (
    <div className="footer-wrapper">
      <a className="link-a" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402003909">
        <img className="img-s" src={require('../../assets/images/ba-pic.png')}/>
        <p className="num-s">粤公网安备 44030402003909号</p>
      </a>
    </div>

    
    // <FooterAnt style={{ textAlign: 'center' }}>粤ICP备20055632号</FooterAnt>
    // <footer id="footer-wrapper">
    //   <p>
    //     ICP备案/许可证编号:
    //     <a href="http://beian.miit.gov.cn">粤ICP备20055632号</a>
    //   </p>
    //   <div class="bottom-layer-right">
    //     <span>ICP备案/许可证编号:</span>
    //     <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank">
    //       <span class="bottom-recordcode">粤ICP备20055632号</span>
    //     </a>
    //   </div>
    // </footer>
  )
}
