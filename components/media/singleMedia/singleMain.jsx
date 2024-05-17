import Link from "next/link";
import Photos from "@/components/media/photos";
import Episodes from "@/components/media/episodes";
import Casts from "@/components/media/casts";

const SingleMain = ({ media }) => {
  return (
    
      <div className="col-span-8 space-y-6 p-2 lg:col-span-4">
          <div
          className="transition-height relative duration-300 ease-out whitespace-pre-wrap md:!mt-0"
          itemprop="description"
        >
          <h2 className="pinline mt-3 flex text-base font-normal capitalize dark:font-extrabold dark:text-white md:mt-0 md:hidden">
            خلاصه داستان
          </h2>
          <p
            className="text-justify leading-relaxed mt-4"
            dangerouslySetInnerHTML={{ __html: media.summary }}
          ></p>
        </div>

        <div className="episodes">
          <div className="flex items-center justify-between">
            <h2 className="pinline text-base font-normal capitalize dark:font-extrabold text-white">
              قسمت‌ها
            </h2>
            <Link
              href={`/media/${media.slug}/episodes`}
              className="hover:text-primary mb-4 flex flex-row items-center text-sm font-bold transition-colors ease-in-out"
            >
              همه
              <i className="dz-arrow-right ml-1"></i>
            </Link>
          </div>
          <Episodes media_id={media.media_id} media_slug={media.slug} />
        </div>

        <div className="photos">
          <div className="flex items-center justify-start">
            <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">
              تصاویر
            </h2>
          </div>
          <Photos media_id={media._id} episode_id={0} />
        </div>

        <div className="cast">
          <div className="flex items-center justify-between">
            <h2 className="pinline text-base font-normal capitalize dark:font-extrabold dark:text-white">
              بازیگران
            </h2>
          </div>
          <Casts media_id={media._id} />
        </div>
      </div>
   
  );
};

export default SingleMain;
