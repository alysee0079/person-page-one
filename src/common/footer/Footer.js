import React from 'react'
import './Footer.css'
import { Layout } from 'antd'
const { Footer: FooterAnt } = Layout;

export default function Footer () {
  return (
    <FooterAnt style={{ textAlign: 'center' }}>粤ICP备20055632号</FooterAnt>
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
