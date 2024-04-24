import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleMedia = () => {
  const mediaData = {
    name: "ظالم",
    poster: "/images/gaddar_poster.jpg",
    header: "/images/gaddar_header.jpg",
    photos: "/images/gaddar_poster.jpg",
    genre: "درام",
    date_product: "2024",
    seasons: "1",
    episodes: "5",
    social_id: "اینستاگرام",
    cast: "چاتای اولسون، سامیه لک، شهاب حسینی",
    summery:
      'داغان سربازی است که در شرق خدمت می کند. پس از دو سال دوری از زادگاهش به دلیل اتفاقات دردناکی که تجربه کرد، او برای استراحت ذهنی برمی گردد. با این حال، هنگامی که او به محله خود باز می گردد، در حالی که آن را ترک کرده است، نمی تواند چیزی پیدا کند. دوست دختر او آیدان، که او عشق پرشوری با او دارد، ناپدید شده است. عشق آنها به قدری شدید است که حتی زمانی که از هم دور هستند، کاملاً از هم جدا نمی شوند، بنابراین پیدا نکردن او عمیقاً بر داغان تأثیر می گذارد. خانواده اش از هم پاشیده شده است: او متوجه می شود که خواهرش با مردی فرار کرده است، برادرش مدرسه را رها کرده و درگیر مشاغل مبهم شده است و والدینش از هم جدا شده اند. معلوم شد که داغان کسی بود که خانه را کنار هم نگه می داشت. وقتی او رفت همه چیز خراب شد. اوضاع محله هم مثل هم نیست. شخصیت‌های سایه‌دار زمام امور را به دست گرفته‌اند و دوستان قدیمی‌اش درگیر فعالیت‌های غیرقانونی مختلفی شده‌اند. در این محیط پر هرج و مرج شخصیتی به نام «کارگردان» ظاهر می شود. او به داغان پیشنهاد کار می دهد. "هیتمن." اگرچه داغان در ابتدا به شدت آن را رد می کند، اما برای محافظت از نزدیک ترین دوست خود، سامت، خود را در میان مشکل می بیند. وقتی صامت می میرد، داغان برای بازپرداخت بدهی صامت به کارگردان حاضر به ترور می شود وگرنه فرزند و همسر صامت خواهند مرد! پس از اطلاع از اینکه دوست دخترش آیدان با مرد دیگری درگیر است، روانشناسی او بیشتر به هم می ریزد. رویاهای او برای به دست آوردن پشت او از بین می رود. در این بین متوجه می شود که به دلیل کاری که انجام می دهد خانواده و عزیزانش در خطر هستند',
    rating: "2",
    director: "احمد جلالی",
    producer: "شهاب رضویان",
    writer: "علی جمالی",
    network: "نماوا",
    production: "نماوا",
    premiered: "1 اسفند 1402",
    status: "در حال پخش",
    schedule: "جمعه ها 8 صبح",
    runtime: "55 دقیقه",
    links: "https://namava.ir/zalem",
    watch_on: "نماوا",
    tizer: "/videos/gaddar_tizer.mp4",
    tags: "درام عاشقانه، هیجانی",
    slug:'zalem'
  };

  return (
    <div className="single_media relative">
      <div className="cover absolute z-0 h-72 w-full md:h-96">
        <Image
          src={mediaData.header}
          alt={mediaData.name}
          width={1280}
          height={500}
          className="absolute left-0 top-0 h-full w-full object-cover object-top opacity-40"
        />
      </div>

      <div className="header relative flex h-72 flex-col justify-end py-5 md:h-96">
        <div className="z-10 px-5 md:px-8 xl:px-0">
          <div className="xl:container mx-auto">
            <div className="grid w-full lg:grid-cols-8 lg:gap-8">
              <div className="col-span-2 hidden lg:flex"></div>
              <div className="col-span-8 flex flex-col items-center lg:col-span-6 lg:block">
                <div className="flex flex-wrap items-center order-2 lg:order-1">
                  <div className="mb-1.5 mr-2 flex items-center space-x-2 text-xs">
                    <span className="inline-flex h-7 items-center rounded-full bg-white/10 text-white">
                      <span className="bg-primary inline-flex h-7 w-7 items-center justify-center rounded-full">
                        <i className="text-white dz-star"></i>
                      </span>
                      <span className="pl-2 pr-3 text-center text-sm font-bold">
                        <span>
                          <span itempropx="ratingValue">4.6</span>/5
                        </span>
                        <span className="ml-1 font-normal lowercase">
                          {" "}
                          (37 Votes){" "}
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="order-1 mb-3 flex items-center gap-1 lg:order-2 lg:mb-0">
                  <h1
                    itemprop="name"
                    className="text-2xl text-white md:text-4xl"
                  >
                    <a href="https://kelaket360.ir/media/zalem" id="show-title">
                      {mediaData.name}
                    </a>
                  </h1>
                  <div itemprop="description" className="hidden">
                    {" "}
                    {mediaData.summery}
                  </div>
                </div>
                <ul className="order-3 my-2 inline-flex gap-5 border-y border-y-white/10 py-2 text-center text-xs text-white md:my-4 md:text-left md:text-base">
                  <li>
                    <span>تولید:{mediaData.date_product}</span>
                  </li>
                  <li>
                    <span>فصل:{mediaData.seasons}</span>
                  </li>
                  <li>
                    <a href="https://kelaket360.ir/network/namava">
                      <span className="font-bold underline">
                        {mediaData.network}
                      </span>
                    </a>
                  </li>
                  <li>
                    <span>
                      <a className="comma-separated mr-1" href="/genre/drama">
                        {mediaData.genre}
                      </a>
                    </span>
                  </li>
                </ul>
                <ul className="order-4 my-2 flex items-center justify-start space-x-3 text-white">
                  <li>
                    <button className="btn border-2 px-6 border-white/80 text-white">
                      اضافه به لیست
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative shadow-sm bg-zinc-900 ">
        <div className="px-3 md:px-8 xl:px-0">
          <div className="xl:container mx-auto">
            <div className="grid gap-8 lg:grid-cols-8">
              <div className="col-span-2 hidden lg:block"></div>
              <div className="col-span-8 flex items-center justify-center gap-3 md:col-span-6 md:justify-between">
                <ul className="flex flex-row gap-6 md:gap-7">
                  <li><Link href='/media/tt/' className="font-heading border-b-primary border-b-4 flex items-center justify-center px-2 py-5 text-sm font-bold uppercase dark:font-extrabold md:px-0">نیم نگاه</Link></li>
                  <li><Link href='/media/tt/episodes' className="font-heading border-b-primary border-b-4 flex items-center justify-center px-2 py-5 text-sm font-bold uppercase dark:font-extrabold md:px-0">قسمت‌ها</Link></li>
                  <li><Link href='/media/tt/cast' className="font-heading border-b-primary border-b-4 flex items-center justify-center px-2 py-5 text-sm font-bold uppercase dark:font-extrabold md:px-0">بازیگران و عوامل</Link></li>
                  <li><Link href='#' className="font-heading border-b-primary border-b-4 flex items-center justify-center px-2 py-5 text-sm font-bold uppercase dark:font-extrabold md:px-0">نقد و بررسی‌ها</Link></li>
                  <li><Link href='#' className="font-heading border-b-primary border-b-4 flex items-center justify-center px-2 py-5 text-sm font-bold uppercase dark:font-extrabold md:px-0">اخبار</Link></li>
                  <li><Link href='#' className="font-heading border-b-primary border-b-4 flex items-center justify-center px-2 py-5 text-sm font-bold uppercase dark:font-extrabold md:px-0">لیست‌ها</Link></li>
                </ul>
                <ul className="hidden gap-2 md:flex">
                  <li><Link href='#'>instagram</Link></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wrapper">
        <div className="xl:container mx-auto">
          <div className="grid grid-cols-8 gap-8">
            <div className="col-span-8 hidden lg:col-span-2 lg:block">
              <div className="sidebar z-30 lg:-mt-80">
                <figure className="cell relative hidden md:block">
                  <Link href={mediaData.slug}>
                    <picture className="no-progress rounded-x-sm overflow-hidden">
                      <Image src={mediaData.poster} width={488} height={612} loading="lazy"/>
                      </picture>
                  </Link>
                </figure>
                <div className="widget !md:mb-10 mt-5 !mb-0">
                  <div className="widget-title">
                    <h2 className="mb-5 text-lg text-black dark:text-white">
                      <span>کجا ببینم</span>
                    </h2>
                  </div>
                  <div className="relative">
                    <ul className="card divide-y divide-black/5 p-4 dark:divide-white/5">
                      <li className="mb-3 pt-3 first:pt-0 last:mb-0">
                        <Link href={mediaData.links} target="_blank" className="flex flex-row w-full streaming-link" title="Gaddar" data-platform="YouTube">
                          <Image src="/storage/source-logos/youtube.svg" className="rounded" alt="Watch Gaddar on YouTube" width={85} height={40} />
                            <div className="ml-4 flex flex-col flex-1">
                            <span className="text-base font-heading font-extrabold">{mediaData.network }</span>
                              <span className="text-xs">اشتراکی</span>
                            </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 space-y-6 lg:col-span-4">
              <div className="flex flex-col md:hidden">
                <Link data-src="" href='' data-lg-size="720-405" className="trailer btn border-primary bg-primary mb-3 flex w-full cursor-pointer justify-between border-2 px-4 text-white md:hidden" > Watch Trailer <i className="dz-play-o ml-2">
                </i>
                </Link>
              </div>
              <div className="transition-height relative duration-300 ease-out whitespace-pre-wrap md:!mt-0" itemprop="description">
                <h2 className="pinline mt-3 flex text-base font-normal capitalize dark:font-extrabold dark:text-white md:mt-0 md:hidden">
                  خلاصه داستان
                </h2>
                <span className="inline text-justify">{mediaData.summery }</span>
                <span className="inline read-more">
                  <Link href="#" id="readmore" className="">more</Link>
                </span>
              </div>

              <div className="episodes">
                <div className="flex items-center justify-between">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">قسمت‌ها</h2>
                  <Link href="https://dizilah.com/show/gaddar/episodes" className="hover:text-primary mb-4 flex flex-row items-center text-sm font-bold transition-colors ease-in-out">
                    همه
                    <i className="dz-arrow-right ml-1"></i>
                  </Link>
                </div>
                <div className="h-48 w-full bg-slate-800">
                  swiper
                </div>
              </div>

              <div className="photos">
                <div className="flex items-center justify-between">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">تصاویر</h2>
                  <Link href="https://dizilah.com/show/gaddar/episodes" className="hover:text-primary mb-4 flex flex-row items-center text-sm font-bold transition-colors ease-in-out">
                    همه
                    <i className="dz-arrow-right ml-1"></i>
                  </Link>
                </div>
                <div className="h-48 w-full bg-gray-400">
                  swiper
                </div>
              </div>

              <div className="cast">
                <div className="flex items-center justify-between">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">بازیگران</h2>
                  <Link href="https://dizilah.com/show/gaddar/episodes" className="hover:text-primary mb-4 flex flex-row items-center text-sm font-bold transition-colors ease-in-out">
                    همه
                    <i className="dz-arrow-right ml-1"></i>
                  </Link>
                </div>
                <div className="h-48 w-full bg-slate-800">
                  swiper
                </div>
              </div>

              <div className="related">
                <div className="flex items-center justify-between">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">سریال های مشابه</h2>
                  <Link href="https://dizilah.com/show/gaddar/episodes" className="hover:text-primary mb-4 flex flex-row items-center text-sm font-bold transition-colors ease-in-out">
                    همه
                    <i className="dz-arrow-right ml-1"></i>
                  </Link>
                </div>
                <div className="h-48 w-full bg-slate-800">
                  swiper
                </div>
              </div>


            </div>
            <div className="col-span-8 lg:col-span-2">
              <div className="sidebar">
                <div className="p-2">
                  <button className="bg-red-600 text-white rounded-lg w-full text-center p-3 m-2">تماشای تیزر</button>
                  <button className="bg-gray-600 text-white rounded-lg  w-full text-center p-3 m-2">امتیاز هر قسمت</button>
                </div>
                <div className="p-2">
                  <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">اطلاعات سریال</h2>
                  <div className="bg-zinc-900 p-5 text-gray-100 flex flex-col">
                    <span className="inline-flex">شروع نمایش: { mediaData.premiered}</span>
                    <span className="inline-flex">وضعیت: { mediaData.status}</span>
                    <span className="inline-flex">زمان پخش: { mediaData.schedule}</span>
                    <span className="inline-flex">مدت: { mediaData.runtime}</span>
                    <span className="inline-flex">محصول: { mediaData.production}</span>
                    <span className="inline-flex">سایت: <Link className='text-red-700' href={mediaData.links}> سایت رسمی</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SingleMedia;
