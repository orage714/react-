import React, { Component } from "react";
import { Carousel } from 'element-react';
import 'element-theme-default';
import MyForm from "../../components/form";
import "./index.css";
class Inde extends Component { 
    constructor(props) {
        super(props)

    this.state = {
        banHeight: 1,
        anlie: [
            {img:"ban4",caption:"超级幻影猫",info:"一款被AppStore全球推荐的游戏"},
            {img:"ban5",caption:"星际战车",info:"集休闲、竞技于一身的网页游戏"},
            {img:"ban6",caption:"泰迪欢乐时光",info:"一款休闲消除游戏"},
        ],
        character: [
            {
                img: "character1", tit: "主美术", infos: [
                    { num: 1, info: "负责手游项目整体美术风格的制定及把控;" },
                    { num: 2, info: "独立担当设计任务，制定美术培训计划，负责项目组美术人员的整体技术能力提升；;" },
                    { num: 3, info: "为各项目的不同设计需求做技术评估和质量监控；" },
                    { num: 4, info: "负责与策划和程序部门沟通对接，制定美术团队的工作计划、保障项目进度。" }
                ]
            },{
                img: "chacter2", tit: "项目经理", infos: [
                    { num: 1, info: "负责与客户建立并维护良好的合作关系，负责与客户各项工作的对接；" },
                    { num: 2, info: "负责整体项目的进度把控；" },
                    { num: 3, info: "负责项目的成本及工作量分析；" },
                    { num: 4, info: "负责与美术制作部门对接分配项目工作；" }
                ]
            }, {
                img: "character3", tit: "3D动画师", infos: [
                    { num: 1, info: "负责3D角色与各类Boss的动作设计与制作，要求设计与制作流畅、合理、有创意；" },
                    { num: 2, info: "使用3D Max进行角色骨骼绑定，能够使用IK、骨骼系统制作复杂角色动画。" }
                ],
            },{
                img: "character4", tit: "游戏原画师", infos: [
                        { num: 1, info: "负责手游项目整体美术风格的制定及把控;" },
                        { num: 2, info: "与美术团队协作创作优秀的美术作品；" },
                        { num: 3, info: "按时保质保量完成美术设计工作。" }
                      ]
            }
        ],
    }
    }
    componentDidMount() { 
        this.scrollChange();
        this.rise()
    }
    componentWillMount() { 

        // window.removeEventListener("resize", this.rise)
    }
    scrollChange = () => {
  
        window.addEventListener("resize", this.rise)
       
    }
    rise = () => { 
       const windW = document.body.clientWidth || window.innerwidth;
        this.setState({
            banHeight: windW /2,
        })
        // console.log(this.state.banHeight)
    }
    render() { 
        const anlie = (
            this.state.anlie.map((item) => { 
              return <figure className="mar-hen-10" >
                    <img src={require(`../../images/${item.img}.png`)} alt="" />
                  <figcaption className
                  ="mar-t-15">
                        <p>{item.caption}</p>
                        <p>{item.info}</p>
                    </figcaption>
                </figure>
            }))
        const character = (
            this.state.character.map((item,index) => { 
                return <figure key={index} className="character mar-hen-10 mar-t-15">  
                             <img className="mar-t-15"  src={require(`../../images/${item.img}.png`)} alt=""/>
                             <figcaption>
                                <h4 className="position">{item.tit} </h4>
                                    {item.infos.map((infoCaption,index) => { 
                            return <p key={index}>{infoCaption.num}.{infoCaption.info}</p>
                                    } )}
                            </figcaption>
                            
                      </figure> 
            })
        )
        return (
            <div>
                <div className="block">
                    <Carousel className="banner" trigger="click" height={this.state.banHeight}>
                        {
                            [0,1,2,3].map((item, index) => {
                                return (
                                    <Carousel.Item key={index} >
                                        <div className={`ban${index}`}></div>
                                    </Carousel.Item>
                                )   
                            })
                        }
                    </Carousel>
                </div>
                <div className="contain">
                    <h4 className="s-text-guanyu pd-t"><strong> -关于图特-</strong></h4>
                    <h4 className="s-font-heading">
                        <p>
                        厦门图特网络科技有限公司（StarArt Studio）成立于2008年，位于 “国际花园城市”——厦门，是一家专注于互动类游戏软件研发及数字化媒体艺术创作的互联网公司。
                        </p>
                        <p>
                        公司现有百余名员工，是一支年轻化的、富有创新精神和创造力的团队。核心成员皆来自于国内一线游戏公司，拥有丰富的优势资源及行业经验，亦有超强的项目管控能力。公司秉承“以客户为中心、坦诚沟通、追求极致”的精神，不懈努力将其打造为国际领先的互动类游戏及数字化媒体艺术创作商！
                        </p>
                    </h4>
                    <figure>
                        <img width="100%" src={require("../../images/hindex.png")} alt=""/>
                    </figure>
                    <figcaption className="figInfo"><a href="#">了解更多</a></figcaption>
                    <h4 className="s-text-guanyu pd-t"><strong> -我们服务-</strong></h4>
                    <div className="youxi-caption"> 
                        <figure>
                            <img src={require("../../images/figcaption1.png")} alt="" />
                            <figcaption>
                                <p>游戏整包</p>
                                <p>为客户定制符合游戏策划人的高品质游戏作品，是图特一贯坚持的合作理念。更多风格作品请联系商务部索取。</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={require("../../images/figcaption2.png")} alt="" />
                            <figcaption>
                                <p>2D原画设计</p>
                                <p>风格迥异极富想象力的原画角色及场景设计是图特最具竞争力的服务板块。更多风格作品请联系商务部索取。</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={require("../../images/figcaption3.png")} alt="" />
                            <figcaption>
                                <p>3D游戏美术</p>
                                <p>基于对用户的研究分析，建立真正符合用户使用场景和用户真正需求的交互模型。更多风格作品请联系商务部索取。</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={require("../../images/figcaption4.png")} alt="" />
                            <figcaption>
                                <p>动画制作</p>
                                <p>打造高品质并赋予本企业的产品以灵魂的动画作品，只为用户初见时的满意。更多风格作品请联系商务部索取。</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <hr className="mar-t-7" />
                <div className="contain">
                    <h4 className="s-text-guanyu pd-t"><strong> -项目案列-</strong></h4>
                    <div className="anlie-caption">
                         {anlie}
                    </div>
                </div>
                <hr className="mar-t-7" />
                <div className="contain">
                    <h4 className="s-text-guanyu pd-t"><strong> -招贤纳士-</strong></h4>
                    <h1 className="ail">StarArt期待你的加入，快把简历投给我们吧hr@start-lab.com</h1>
                    <div> {character} </div> 
                    <h4 className="more-wrap mar-t-7">
                    <a href="#" className="more">更多</a>
                    </h4>
                       
                </div>
                <footer className="footer">
                   <h4 className="s-text-guanyu pd-t color-w"><strong> -练习我们-</strong></h4>
                    <div className="tel"><i className="el-icon-message"></i><i className="el-icon-edit"></i>0592-5938786</div>
                  <MyForm/>
                </footer>
            </div>
        )
    }
}
export default Inde;