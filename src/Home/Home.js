import './Home.css';
import Menu from "../Menu/Menu"
import Stories from "../Stories/Stories"
import Post from "../Post/Post"
import SearchProfile from "../SearchProfile/SearchProfile"
import SuggestionProfile from "../SuggestionProfile/SuggestionProfile"
const  Home = () => {
    const stories = [
        {
            id: 1,
            created_at: "2023-02-09",
            updated_at: "2023-02-13",
            image: "https://resize.elle.fr/portrait/var/plain_site/storage/images/people/la-vie-des-people/news/kylie-jenner-son-amusant-hommage-a-sa-mere-kris-jenner-4042409/97149087-1-fre-FR/Kylie-Jenner-son-amusant-hommage-a-sa-mere-Kris-Jenner.jpg"
        },
        {
            id: 2,
            created_at: "2023-02-16",
            updated_at: "2023-02-19",
            image: "https://wave.fr/images/1916/04/air-jordan-4-black-cat-cu1110-010-date-de-sortie-prix.jpg"
        },
        {
            id: 3,
            created_at: "2023-02-12",
            updated_at: "2023-02-20",
            image: "https://www.parlons-basket.com/wp-content/uploads/2022/02/nba-paul-george-choix-russell-westbrook-kawhi-leonard.jpg"
        },
        {
            id: 4,
            created_at: "2023-02-19",
            updated_at: "2023-02-23",
            image: "https://intrld.com/wp-content/uploads/2019/06/gunna-4.jpg"
        },
        {
            id: 5,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://generations.fr/media/news/thumb/1110x624_5f7c77f412897-travis-scott.webp"
        },
        {
            id: 6,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Playboi_Carti.jpg"
        },
        {
            id: 7,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://img.nrj.fr/YW-O6K1yAVwPCqPVOfIBz6zqzgU=/800x450/smart/https%3A%2F%2Fmedia.nrj.fr%2F436x327%2Ferykha-badu-jpg_13585.jpg"
        },
        {
            id: 8,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://www.affranchis.eu/wp-content/uploads/2020/08/malcolm.png"
        },
        {
            id: 9,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg"
        },
        {
            id: 10,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvBL5I9yO20qLq8tMfeSEFlXd8pMCbw0aPQ&usqp=CAU"
        },
        {
            id: 11,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhDtEmp6xfvY0GWawLU9G0hLyQBnkjZs2zQ&usqp=CAU"
        },
        {
            id: 12,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://i.pinimg.com/originals/84/53/1f/84531fbfba0ed2bf1453a8ec9865afe3.jpg"
        },
        {
            id: 13,
            created_at: "2023-02-10",
            updated_at: "2023-02-13",
            image: "https://static.posters.cz/image/750/affiches-et-posters/ice-cube-impala-i108311.jpg"
        },

    ]
    const posts = [
        {
            id: 1,
            content: "https://wave.fr/images/1916/04/air-jordan-4-black-cat-cu1110-010-date-de-sortie-prix.jpg",
            url: "",
            type: "video",
            user_id: 2,
            description: "Air force Black 2",
            username: "@username",
            created_at: "2022-03-20",
            updated_at: "2022-02-13"
        },
        {
            id: 2,
            content: "http://cdn.shopify.com/s/files/1/0703/6905/0938/products/nike-dunk-low-next-nature-white-mint-w-1-1000.png?v=1673889679",
            url: "",
            type: "video",
            user_id: 2,
            description: "Air force Black 2",
            username: "@username",
            created_at: "2022-03-20",
            updated_at: "2022-02-13",
        }, {
            id: 3,
            content: "https://www.media.hw-static.com/media/2016/07/columbiapictures_boyznthehood_070816_1800x1200.jpg",
            url: "",
            type: "video",
            user_id: 2,
            description: "Air force Black 2",
            username: "@username",
            created_at: "2022-03-20",
            updated_at: "2022-02-13",
        }, {
            id: 4,
            content: "https://static01.nyt.com/images/2020/11/12/us/00xp-sitcom-hbo/00xp-sitcom-hbo-mobileMasterAt3x.jpg",
            url: "",
            type: "video",
            user_id: 2,
            description: "Air force Black 2",
            username: "@username",
            created_at: "2022-03-20",
            updated_at: "2022-02-13",
        }
    ]

    const user = [
        {
            id: 123,
            name: "Sullivan",
            username: "Sullivan_sxt",
            image: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/02/media-26867-scaled.jpg",
        }
    ]
    const suggestionProfile = [
        {
            id: 123,
            name: "Sullivan",
            username: "Sullivan_sxt",
            goToFollowing: "Kessab_M",
            image: "https://media.vogue.fr/photos/5c2f4640d6f150c37e48eca3/2:3/w_2560%2Cc_limit/laryn_9181.jpeg",
        },
        {
            id: 12,
            name: "Sullivan",
            username: "Sullivan_sxt",
            goToFollowing: "Kessab_M",
            image: "https://s.yimg.com/ny/api/res/1.2/g59hht2hXWLduCfkWhxXVg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/vibe_128/f75c3cb9a9f775849bceef748f1d5143",
        },
        {
            id: 1,
            name: "Sullivan",
            username: "Sullivan_sxt",
            goToFollowing: "Kessab_M",
            image: "https://generations.fr/media/news/610a4df064738-nas.jpg",
        },
        {
            id: 3,
            name: "Sullivan",
            username: "Sullivan_sxt",
            goToFollowing: "Kessab_M",
            image: "https://www.rollingstone.com/wp-content/uploads/2022/08/yung-thug-gunna.jpg?w=1581&h=1054&crop=1",
        },
        {
            id: 2,
            name: "Sullivan",
            username: "Sullivan_sxt",
            goToFollowing: "Kessab_M",
            image: "https://www.rollingstone.com/wp-content/uploads/2021/12/chronixx.jpg",
        }
        , {
            id: 9,
            name: "Sullivan",
            username: "Sullivan_sxt",
            goToFollowing: "Kessab_M",
            image: "https://cdns-images.dzcdn.net/images/cover/c2ca203de734451cf5619a569fc8c6e9/264x264.jpg",
        }
    ]
    return (
        <section className="Home">
            <Menu></Menu>
            <div className="storiesAndPublication">
                <Stories stories={stories}></Stories>
                <Post posts={posts}></Post>
            </div>
            <div className="searchAndProfile">
                <SearchProfile user={user}></SearchProfile>
                <SuggestionProfile suggestionProfile={suggestionProfile}></SuggestionProfile>
            </div>


        </section>
    );
}

export default Home;

