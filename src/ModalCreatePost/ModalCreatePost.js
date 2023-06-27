    import './ModalCreatePost.css';
    import React, { useEffect, useState } from 'react';
    import StepOne from './StepOne/StepOne';
    import StepTwo from './StepTwo/StepTwo';
    import StepThree from './StepThree/StepThree';
    import Axios from 'axios';
    import Home from '../Home/Home';
    import InstadamsCard from '../InstadamsCard/InstadamsCard';
    import {
        BrowserRouter,
        Routes,
        Route, useNavigate
    } from 'react-router-dom';


    const ModalCreatePost = (props) => {
        const text = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        const [filePrev,setFilePrev] = useState("https://webdi.fr/img/couleurs/efefef.png")
        const [cpt, setCpt] = useState(1)
        const [user_id,setUserId] = useState(0)
        const navigate = useNavigate();
        const [front_form_data, setFormDataFront] = useState({
            File:"",
            hashtag:"",
            url:"",
            content:"",
            username:"Username"
        });
        const [file,setFile] = useState({file:null})

        const handleChange = (e) => {
            const name = e.target.name
            const type = e.target.type
            const value = e.target.value  
            if(type === "file"){
                setFilePrev(URL.createObjectURL(e.target.files[0]))
                setFormDataFront({...front_form_data,
                    "image":URL.createObjectURL(e.target.files[0])
                })
                setFile({file:e.target.files[0]})
            }
            setFormDataFront({...front_form_data,
                [name]:value
            })
        }
    const handleSubmitOne = (e) => {
            e.preventDefault()
            const form_data = new FormData(e.currentTarget)
            handleFormData(form_data)
        }

        const handleFormData = (form_data) => {
            const values = [...form_data.values()]
            const is_empty = values.includes("")
            //const raw = Object.fromEntries(form_data)
            form_data.append('token',localStorage.getItem('token'))
            form_data.append('file',file)
            if(!is_empty){
                if(localStorage.getItem('token')){
                    props.setShowLoad(true)
                 
                  const post_post = async() => {
                        const downloadURL = [
                            'https://yt3.googleusercontent.com/Yz3oelvJmuEdZ7KgZBbQrYGSEk2AXiJOv2GKPawnO-GevldW7xE3ax53gkJvJ7m4Bdg2QRHKkA=s900-c-k-c0x00ffffff-no-rj',
                            'https://images.sk-static.com/images/media/img/col4/20181026-002640-702185.jpg',
                            'https://www.thebackpackerz.com/wp-content/uploads/2019/03/Madeintyo-bb16-hot100-2016-billboard-1548.jpeg',
                            'https://www.usatoday.com/gcdn/presto/2022/03/28/USAT/61a0873f-f580-4c01-b81e-81d5a64a4bdc-GettyImages-1388120392.jpg?crop=3629,2041,x0,y354&width=3200&height=1800&format=pjpg&auto=webp',
                            'https://i.ytimg.com/vi/g-B68w4bf28/maxresdefault.jpg',
                            'https://images.bfmtv.com/-p4yUqeJnSRtU316no_QcWl9Pus=/0x58:2048x1210/2048x0/images/Young-Thug-1359102.jpg',
                            'https://l450v.alamy.com/450vfr/m7hwp9/parramatta-nsw-australie-mar-10-2018-artiste-hip-hop-nous-madeintyo-l-execution-a-la-jumanji-credit-sydney-festival-presse-australienne-zuma-alamy-fil-live-news-m7hwp9.jpg',
                            'https://global-uploads.webflow.com/62158cc7e1cd8f0ec3729390/63ed20f2d8d25566cff84d19_madeintyo-b3zuW.jpeg',
                            'https://www.yourtempo.com/uploaded/blog/Blog_1624288294_35.jpg',
                            'https://img.nrj.fr/nk71ut7_Za0TqZz2pptIz8LUKno=/medias/2019/07/ariana-grande-mac-miller_5d2602d545391.jpg'
                    
                        ]
                        const response_post = await Axios.post('http://localhost:3001/api/posts/create_post_bis',{
                            url:downloadURL[Math.floor(Math.random() * 10)]
                        },{
                            headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                            "Content-Security-Policy": "script-src-attr 'self';"
                            }
                        })
                        if(response_post.status == 200){
                            props.setShowLoad(false)
                            //props.setShowSuccess(true)
                            props.setChild(<Home></Home>)
                        }
                    }
                  post_post()
            
               
                    /*Axios.post(`http://localhost:3001/api/posts`,form_data,{
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                            'Access-Control-Allow-Origin' : '*',
                            'Content-Type':'multipart/form-data',
                            "Content-Security-Policy": "script-src-attr 'self';"
                        },
                    })
                    .then(res => {
                        if(res.data.message == "Post created successfully"){
                            props.setShowLoad(false)
                            props.setShowSuccess(true)
                            navigate('/home')
                        }
                    
                    })*/
                }
            } else {
                console.log('remplissez toutes les valeurs !')
            }
        }
        useEffect(()=> {
            if(localStorage.getItem('token')){
                Axios.get('http://localhost:3001/api/users', {
                    headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    "Content-Security-Policy": "script-src-attr 'self';"
                    }
                })
                    .then(function (response) {
                    console.log(response.data.response[0])
                    setFormDataFront({...front_form_data,
                    username:response.data.response[0].username})
                    setUserId(response.data.response[0].id)
                })
            }
        }, [])
        return (
            <div className="ModalCreatePost">
            <div className="titleStep">Etape {cpt} /3</div>
                <div className="parent_card">
                
                    
                    <InstadamsCard 
                    filePrev={filePrev} 
                    handleChange={handleChange}
                    backgroundColor={'#fff'}
                    text={text}
                    width={'50%'}
                    height={500}
                    color={'#000'}
                    hashtag={front_form_data.hashtag}
                    username={front_form_data.username}
                    />
                        <InstadamsCard 
                    filePrev={filePrev} 
                    handleChange={handleChange}
                    backgroundColor={'#0f0f0f'}
                    text={text}
                    width={'50%'}
                    height={500}
                    color={'#fff'}
                    hashtag={front_form_data.hashtag}
                    username={front_form_data.username}
                    />
                    
                    </div>
                <div className="switchStepBox">
                    <form onSubmit={handleSubmitOne}>
                        <StepOne handleChange={handleChange} setCpt={setCpt} cpt={cpt} frontFormData={front_form_data} setFormDataFront={setFormDataFront}></StepOne>
                        <StepTwo handleChange={handleChange} setCpt={setCpt} cpt={cpt} frontFormData={front_form_data} setFormDataFront={setFormDataFront} ></StepTwo>
                        <StepThree setCpt={setCpt} cpt={cpt} frontFormData={front_form_data} ></StepThree>
                    </form>
                </div>
            </div>
        );
    }

    export default ModalCreatePost;