import './accessories.scss';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import usehelpPassAllImg from '../../../hooks/usehelpPassAllImg';
import HederArticles from '../../../components/HederArticles/HederArticles';
import ArticleOption from '../../../components/ArticleOption/ArticleOption';
import Title from '../../../components/Title/Title';
import PhotoRow from '../../../components/PhotoRow/PhotoRow';

const Accessories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const allImg = usehelpPassAllImg(require.context('../../../resources/images/articles/accessories/', false, /\.(png|jpe?g|svg|webp)$/), 1);

    return(
        <>
            <Helmet>
                <title>Аксессуары для Свадебной Фотосессии</title>
                <meta
                    name="description"
                    content="Аксессуары на свадебной фотосессии помогают получить красивые и оригинальные фотографии.Хотите получить красивые фото, тогда читаем !"
                />
                <link rel="canonical" href="https://kebikov.com/articles/accessories"/>
            </Helmet>

            <HederArticles title={'Аксессуары для свадебной фотосессии'}/>
            <div className="options">
                <ArticleOption text={'Думаю, не такой пары, которая бы не хотела получить красивые сюжетные фотографии со свадьбы. Аксессуары на свадебной фотосессии помогают получить красивые и оригинальные фотографии. Инициативу проявлять должен не только свадебный фотограф, это должно быть творческое сотрудничество и вы полноправный участник этого тандема. Постарайтесь проявить фантазию, ведь ни кто кроме вас не знает точно чего вы хотите. Давайте вместе подумаем, что вам подойдет.'}/>
                {/* <PhotoRow arrPhoto={[allImg[0][0]]}/> */}
                <Title title={'Флажки и таблички'} color={'#ba9f5a'}/>
                <PhotoRow arrPhoto={[allImg[1][0], allImg[2][0], allImg[3][0]]}/>
                <ArticleOption text={'На западе данные аксессуары используют как при съемке, так и при оформлении территории свадебного торжества. К нам эта мода пришла относительно недавно, причём каждая пара использует их по своему. Основной акцент делается чтобы подчеркнуть на фотосессии: радость, веселье и приколы. Бумажные усы, различные таблички с надписями, разноцветные флажки, все это станет отличным дополнением свадебной фотосессии. Существует уйма вариантов, сейчас все ограничивается лишь вашей фантазией. Надписи будущей общей фамилии, ваши имена или шутливые фразы, сделанные из бумаги, дерева или пенопласта, помогут создать веселую и непринужденную атмосферу.'}/>
                <Title title={'Надувные шары.'} color={'#ba9f5a'}/>
                <PhotoRow arrPhoto={[allImg[4][0], allImg[5][0], allImg[6][0]]}/>
                <ArticleOption text={'Экономный и красивый вариант, разнообразить свадебные фотографии. Гелиевые шары можно развесить под потолком во время съемки утра невесты и тем самым подчеркнуть праздничную атмосферу дня. Привяжите к каждому шару трогательное признание или совместное фото, такое свадебное утро невеста не забудет. Студия, природа, прогулка по городу, спектр применения «воздушной радуги» бесконечен. '}/>
                <Title title={'Ленточки и пяльцы.'} color={'#ba9f5a'}/>
                <PhotoRow arrPhoto={[allImg[7][0], allImg[8][0], allImg[9][0], allImg[10][0]]}/>
                <ArticleOption text={'Я стараюсь размешать фотографии, чтобы вы могли лучше представлять о чем я рассказываю и как выглядит финальный результат. Вариант с ленточками и пяльцами, тоже не ударит по бюджету, а вариации применения просто необъятны. Ленточками можно украсить ветви деревьев, сделать импровизированную свадебную арку и включить данные аксессуары как украшения. Они пригодятся не только на свадебной фотосессии, весь декор который вы использовали на съемке, можно применить и при украшении церемонии или банкетного зала. Думаю просто просматривая прикрепленные изображения, у вас уже появилось не мало идей по применению данных элементов  декора.'}/>
                <PhotoRow arrPhoto={[allImg[11][0], allImg[12][0], allImg[13][0], allImg[14][0]]}/>
                <Title title={'Деревянная лодка'} color={'#ba9f5a'}/>
                <PhotoRow arrPhoto={[allImg[15][0], allImg[16][0], allImg[17][0], allImg[18][0]]}/>
                <ArticleOption text={'Ах, как же романтично смотрятся пары, беззаботно парящие по водной глади. Всю фотосессию проводит в лодке не стоит, но как отдельная локация для съемки, просто отлично! Для придания атмосферы праздника, можно украсить лодку декоративными или живыми цветами. Если прохладная погода, не забудьте плед. Стоит учесть, что если у невесты пышное платье, она заполнит им всю лодку, не давая шанса приблизится жениху, это как минимум дискомфортно для пары. И конечно родных и друзей придется оставить на берегу. В идеале лодки должно быть две, одна для пары, вторая для фотографа и видеографа. Это даст возможность получить разнообразие съемочных планов.'}/>

                <Title title={'Конфетти и лепестки'} color={'#ba9f5a'}/>
                <PhotoRow arrPhoto={[allImg[19][0], allImg[20][0], allImg[21][0]]}/>
                <ArticleOption text={'Посыпание молодых лепестками роз стало уже красивой традицией. Не во всех ЗАГСах это разрешено, так что уточните заранее. Очень красиво и романтично, смотрятся дорожки выложенные из лепестков роз. Практически любой снимок можно оживить, динамичным падением конфетти или лепестков.'}/>
            
                <Title title={'Свадебные качели'} color={'#ba9f5a'}/>
                <PhotoRow arrPhoto={[allImg[22][0], allImg[23][0], allImg[24][0], allImg[25][0]]}/>
                <ArticleOption text={'Великолепные кадры получаются, когда счастливая невеста, беззаботно катается на качелях. Причём изготовить их не составляет ни какого труда. Доска и две веревки, и немного постараться с оформлением по вкусу. Повесить качели можно практически в любом месте, где есть прочная ветвь дерева. Украсьте качели цветами,красивой листвой, и вы получите неповторимую локацию для свадебной фотосессии.'}/>
            
                <Title title={'Цветной дым'} color={'#ba9f5a'}/>
                <PhotoRow arrPhoto={[allImg[26][0], allImg[27][0], allImg[28][0], allImg[29][0]]}/>
                <ArticleOption text={'Яркие и эффектные, клубы плотного разноцветного дыма, наполнят разнообразными красками любое фото. Лучше всего, пользоваться им в то время года, когда природных красок катастрофически мало и хочется разнообразить полученные снимки. Качество дыма влияет на: плотность дыма, продолжительность дымления, яркость и насыщенность красок, покрасит ли он руки и одежду, и не вызовет ли он аллергическую реакцию. Так что, к выбору правильной дымовой шашки нужно подойти основательно, чтобы получить отличные снимки, а не лишние проблемы.'}/>
                <ArticleOption text={'Все что вы просмотрели, лишь малая часть свадебной атрибутики. Я искренне надеюсь, что моя подборка, поможет вам ясней представить, что именно вы хотите.'}/>
            </div>
            
        </>
    )
}

export default Accessories;