import React from 'react'
import { Badge, Button } from 'antd'
import { ReactSVG } from 'react-svg'
import classnames from 'classnames'
import './Demo.css'
const animalData = [
  {
    label: '象',
    active: false,
    icon: 'elephant',
    skill: '践踏',
    skillDesc: '一通乱踩！',
    CE: 8,
    HP: 8
  },
  {
    label: '狮',
    active: false,
    icon: 'lion',
    skill: '咬合',
    skillDesc: '咬住嘴边任何可以咬的东西！',
    CE: 7,
    HP: 7
  },
  {
    label: '虎',
    active: false,
    icon: 'tiger',
    skill: '锁喉',
    skillDesc: '锁住敌人的喉咙！',
    CE: 6,
    HP: 6
  },
  {
    label: '豹',
    active: false,
    icon: 'bigcat',
    skill: '飞扑',
    skillDesc: '扑倒敌人！',
    CE: 5,
    HP: 5
  },
  {
    label: '狼',
    active: false,
    icon: 'wolf',
    skill: '撕裂',
    skillDesc: '撕裂敌人！',
    CE: 4,
    HP: 4
  },
  {
    label: '犬',
    active: false,
    icon: 'dog',
    skill: '摇尾巴',
    skillDesc: '转了几圈，摇了摇尾巴，还顺带叫了两声!',
    CE: 3,
    HP: 3
  },
  {
    label: '猫',
    active: false,
    icon: 'cat',
    skill: '乱抓',
    skillDesc: '使用锋利的猫爪一通乱抓！',
    CE: 2,
    HP: 2
  },
  {
    label: '鼠',
    active: false,
    icon: 'mouse',
    skill: '吱吱',
    skillDesc: '吱吱！',
    CE: 1,
    HP: 1
  }
]
let isDisable = false
export default class Demo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playerData: JSON.parse(JSON.stringify(animalData)),
      npcData:  JSON.parse(JSON.stringify(animalData)),
      playerHero: '',
      npcHero: '',
      info: []
    }
  }
  componentDidMount () {
  }
  autoScroll = () => {
    document.querySelector('.game-info-area').scroll(0, document.querySelector('.game-info-area').scrollHeight)
  }
  selectAnimal = (item) => {
    if (isDisable) {
      return
    }
    let newState = [...this.state.playerData]
    newState = newState.map(i => {
      i.active = false
      if (item.label === i.label) {
        i.active = true
      }
      return i
    })
    this.setState({
      playerData: newState,
      playerHero: item
    })
  }
  startGame = () => {
    if (this.state.playerHero === '') {
      alert('请先选择选手')
      return
    }
    isDisable = true
    const num = Math.floor((Math.random()*(this.state.npcData.length)))
    this.setState({
      npcHero: this.state.npcData[num]
    }, () => {
      setTimeout(() => {
        this.setState({
          info: [...this.state.info, {
            time: new Date().toLocaleString(),
            npc: {...this.state.npcHero},
            player: {...this.state.playerHero},
            type: 'start'
          }]
        }, () => {
          this.autoScroll()
          setTimeout(() => {
            this.setState({
              info: [...this.state.info, {
                time: new Date().toLocaleString(),
                npc: {...this.state.npcHero},
                player: {...this.state.playerHero},
                type: 'player-fight'
              }]
            }, () => {
              this.autoScroll()
              setTimeout(() => {
                this.setState({
                  info: [...this.state.info, {
                    time: new Date().toLocaleString(),
                    npc: {...this.state.npcHero},
                    player: {...this.state.playerHero},
                    type: 'npc-fight'
                  }]
                }, () => {
                  this.autoScroll()
                  setTimeout(() => {
                    this.setState({
                      info: [...this.state.info, {
                        time: new Date().toLocaleString(),
                        npc: {...this.state.npcHero},
                        player: {...this.state.playerHero},
                        type: 'end'
                      }]
                    }, () => {
                      this.autoScroll()
                      setTimeout(() => {
                        this.handleHit()
                      }, 2000)
                    })
                  }, 2000)
                })
              }, 2000)            
            })
          }, 2000)
        })
      }, 2000)
    })
  }
  handleHit = () => {
    if (this.state.npcHero.label === this.state.playerHero.label) {
      this.deleteHero(this.state.npcHero.label)
    } else if (this.state.npcHero.CE > this.state.playerHero.CE) {
      let npc = [...this.state.npcData]
      let player = [...this.state.playerData]
      npc = npc.filter(item => {
        if (item.label === this.state.npcHero.label) {
          item.HP = item.HP - this.state.playerHero.CE
        }
        return item.HP > 0
      })
      player = player.filter(item => {
        return item.label !== this.state.playerHero.label
      })
      this.setState({
        npcData: npc,
        playerData: player,
        info: [...this.state.info, {
          time: new Date().toLocaleString(),
          npc: {...this.state.npcHero},
          player: {...this.state.playerHero},
          type: 'whodie?player'
        }]
      }, () => {
        this.autoScroll()
        isDisable = false
        this.resetStatus()
      })
    } else {
      let npc = [...this.state.npcData]
      let player = [...this.state.playerData]
      player = player.filter(item => {
        if (item.label === this.state.playerHero.label) {
          item.HP = item.HP - this.state.npcHero.CE
        }
        return item.HP > 0
      })
      npc = npc.filter(item => {
        return item.label !== this.state.npcHero.label
      })
      this.setState({
        npcData: npc,
        playerData: player,
        info: [...this.state.info, {
          time: new Date().toLocaleString(),
          npc: {...this.state.npcHero},
          player: {...this.state.playerHero},
          type: 'whodie?npc'
        }]
      }, () => {
        this.autoScroll()
        isDisable = false
        this.resetStatus()
      })
    }
  }
  resetStatus = () => {
    let newState = [...this.state.playerData]
    newState = newState.map(i => {
      i.active = false
      return i
    })
    this.setState({
      playerData: newState,
      playerHero: '',
      npcHero: ''
    })
  }
  deleteHero = (label) => {
    let players = [...this.state.playerData]
    let npcs = [...this.state.npcData]
    players = players.filter((item, index) => {
      return item.label !== label
    })
    npcs = npcs.filter((item, index) => {
      return item.label !== label
    })
    this.setState({
      playerData: players,
      npcData: npcs,
      info: [...this.state.info, {
        time: new Date().toLocaleString(),
        npc: {...this.state.npcHero},
        player: {...this.state.playerHero},
        type: 'whodie?all'
      }]
    }, () => {
      this.autoScroll()
      isDisable = false
      this.resetStatus()
    })
  }
  reloadGame = () => {
    isDisable = false
    this.setState({
      playerData: JSON.parse(JSON.stringify(animalData)),
      npcData:  JSON.parse(JSON.stringify(animalData)),
      playerHero: '',
      npcHero: '',
      info: []
    })
  }
  render() {
    const npc = this.state.npcHero ? (
      <div className="npc-area">
        <ReactSVG className="animal-icon" src={require(`../../assets/images/${this.state.npcHero.icon}.svg`)} />
      </div>
    ) : null
    const player = this.state.playerHero ? (
      <div className="player-area">
        <ReactSVG className="animal-icon" src={require(`../../assets/images/${this.state.playerHero.icon}.svg`)} />
      </div>
    ) : null
    const infoList = this.state.info.length ? (
      this.state.info.map(item => {
        return (
          <li className="info-item" key={item.label}>
            <p className="time-line">{item.time}</p>
            {
              item.type === 'start' ? (
                <>
                  <p>开始了！</p>
                  <p>
                    你选择了<span className="hero-height-light">{item.player.label}</span>
                  </p>
                  <p>
                    npc选择了<span className="hero-height-light">{item.npc.label}</span>
                  </p>
                </>
              ) : item.type === 'player-fight' ? (
                <>
                  <p>
                  你的
                    <span className="hero-height-light">{item.player.label}</span>
                    使用了
                    <span className="skill-height-light">{item.player.skill}</span>，
                    {item.player.skillDesc}
                    造成
                    <span className="hit-height-light">{item.player.CE}</span>
                    点伤害！</p>
                </>
              ) : item.type === 'npc-fight' ? (
                <>
                  <p>npc的
                    <span className="hero-height-light">{item.npc.label}</span>
                    使用了
                    <span className="skill-height-light">{item.npc.skill}</span>，
                    {item.npc.skillDesc}造成
                    <span className="hit-height-light">{item.npc.CE}</span>点伤害！</p>
                </>
              ) : item.type === 'end' ? (
                <>
                  本轮结束！
                </>
              ) : item.type === 'whodie?npc' ? (
                <>
                  npc的选手<span className="hero-height-light">{item.npc.label}</span>下场了
                </>
              ) : item.type === 'whodie?player' ? (
                <>
                  你的选手<span className="hero-height-light">{item.player.label}</span>下场了
                </>
              ) : item.type === 'whodie?all' ? (
                <>
                  你的选手<span className="hero-height-light">{item.player.label}</span>和
                  npc的选手<span className="hero-height-light">{item.player.label}</span>
                  都下场了
                </>
              ) : null
            }
          </li>
        )
      })
    ) : null
    const reload = (!this.state.playerData.length || !this.state.npcData.length) ? (
      <Button className="reload-btn" onClick={() => this.reloadGame()} type="primary" shape="circle">重新开始</Button>
    ) : null
    const result = !this.state.playerData.length ? (
      <p>npc！</p>
    ) : !this.state.npcData.length ? (
      <p>你获胜！</p>
    ) : null
    return (
      <div className="wrapper">
        <ul className="animal-ul">
          {
            this.state.npcData.map(item => {
              return (
                <li className="animal-item" key={item.label}>
                  <Badge count={item.HP} offset={[10, 40]}>
                    <Badge count={item.CE} offset={[10, 0]}>
                      <ReactSVG className="animal-icon" src={require(`../../assets/images/${item.icon}.svg`)} />
                    </Badge>
                  </Badge>                  
                </li>
              )
            })
          }
        </ul>
        <div className="animal-fight-wrapper">
          {npc}
          <div className="fight-area">
            {result}
          </div>
          {player}
          <Button className="start-btn" disabled={isDisable} onClick={() => this.startGame()} type="primary" shape="circle">start</Button>          
          {reload}
          <div className="game-info-area">
            <ul className="info-ul">
              {infoList}
            </ul>
          </div>
        </div>
        <ul className="animal-ul">
          {
            this.state.playerData.map(item => {
              return(
                <li
                  onClick={() => this.selectAnimal(item)}
                  className={classnames({
                    "animal-item": true,
                    "active": item.active
                  })}
                  key={item.label}
                >
                  <Badge count={item.HP} offset={[10, 40]}>
                    <Badge count={item.CE} offset={[10, 0]}>
                      <ReactSVG className="animal-icon" src={require(`../../assets/images/${item.icon}.svg`)} />
                    </Badge>
                  </Badge>                    
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
