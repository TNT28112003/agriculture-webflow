import React from 'react';
import { Button } from '../components/Button/Button';
import {
  CategoryImage_1,
  Collection_1,
  DiscoverImage_1,
  InfoCardIcons1,
  Placeholder,
  RocketLaunch,
  SubCollection_1,
  SubCollection_2,
  SubCollection_Number,
  Widget1,
  Widget_Desktop,
  avatar16,
} from '../import/assets';
import { Heading } from '../components/Heading/Heading';
import { TrendingCollection } from '../components/TrendingCollection/TrendingCollection';
import { TopRatedArtists } from '../components/TopRatedArtists/TopRatedArtists';
import { Category } from '../components/Category/Category';
import { DiscoverMore } from '../components/DiscoverMore/DiscoverMore';
import { InfoCard } from '../components/InfoCard/InfoCard';

export const Home = () => {
  return (
    <main>
      <section className='layout md:grid md:grid-cols-2 md:gap-x-[40px]'>
        <div className='md:mt-[40px]'>
          <h3 className='lg:text-[67px] md:text-[38px] text-[28px] font-semibold text-white leading-[140%]'>
            Discover digital art & Collect NFTs
          </h3>
          <p className='lg:text-[22px] text-base font-normal text-white leading-[140%] py-[10px] md:py-0'>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more
            than 20k NFT artists.
          </p>
          <div className='hidden md:block'>
            <div className='my-[20px]'>
              <Button icon={RocketLaunch} title='Get started' size='m' />
            </div>
            <div className='flex items-center justify-between'>
              <div className=''>
                <h3 className='lg:text-[28px] font-spaceMono text-[22px] font-bold leading-[160%] text-white'>
                  240k+
                </h3>
                <p className='lg:text-[24px] text-base text-white font-normal leading-[140%]'>
                  Total Sale
                </p>
              </div>
              <div>
                <h3 className='lg:text-[28px] font-spaceMono text-[22px] font-bold leading-[160%] text-white'>
                  240k+
                </h3>
                <p className='lg:text-[24px] text-base text-white font-normal leading-[140%]'>
                  Total Sale
                </p>
              </div>
              <div>
                <h3 className='lg:text-[28px] font-spaceMono text-[22px] font-bold leading-[160%] text-white'>
                  240k+
                </h3>
                <p className='lg:text-[24px] text-base text-white font-normal leading-[140%]'>
                  Total Sale
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[40px] rounded-[20px]'>
          <img className='w-full' src={Placeholder} alt='' />
          <div className='bg-gray p-[20px] rounded-b-[20px]'>
            <h3 className='text-[22px] font-semibold text-white leading-[140%] capitalize'>
              Space Walking
            </h3>
            <div className='flex items-center gap-x-3 mt-[10px]'>
              <img className='w-[24px]' src={avatar16} alt='' />
              <h6 className='text-base font-normal leading-[140%] text-white'>Animakid</h6>
            </div>
          </div>
        </div>
        <div className='md:hidden sm:block'>
          <div className='my-[40px]'>
            <Button icon={RocketLaunch} title='Get started' size='m' width='full' />
          </div>
          <div className='flex items-center justify-between'>
            <div className=''>
              <h3 className='font-spaceMono text-[22px-] font-bold leading-[160%] text-white'>
                240k+
              </h3>
              <p className='text-base text-white font-normal leading-[140%]'>Total Sale</p>
            </div>
            <div>
              <h3 className='font-spaceMono text-[22px-] font-bold leading-[160%] text-white'>
                240k+
              </h3>
              <p className='text-base text-white font-normal leading-[140%]'>Total Sale</p>
            </div>
            <div>
              <h3 className='font-spaceMono text-[22px-] font-bold leading-[160%] text-white'>
                240k+
              </h3>
              <p className='text-base text-white font-normal leading-[140%]'>Total Sale</p>
            </div>
          </div>
        </div>
      </section>
      <section className='layout'>
        <Heading
          title='Trending Collection'
          subTitle='Checkout our weekly updated trending collection.'
        />
        {/* tablet and mobile devices */}
        <div className='lg:hidden grid grid-flow-col auto-cols-max[90%] overflow-x-auto snap-x snap-mandatory snap-always gap-x-6 scrollbar-hide'>
          <TrendingCollection
            srcPrimary={Collection_1}
            src1={SubCollection_1}
            src2={SubCollection_2}
            src3={SubCollection_Number}
            avatar={avatar16}
          />
          <TrendingCollection
            srcPrimary={Collection_1}
            src1={SubCollection_1}
            src2={SubCollection_2}
            src3={SubCollection_Number}
            avatar={avatar16}
          />
          <TrendingCollection
            srcPrimary={Collection_1}
            src1={SubCollection_1}
            src2={SubCollection_2}
            src3={SubCollection_Number}
            avatar={avatar16}
          />
        </div>
        {/* desktop */}
        <div className='hidden lg:block'>
          <div className='grid grid-cols-3 gap-[40px]'>
            <TrendingCollection
              srcPrimary={Collection_1}
              src1={SubCollection_1}
              src2={SubCollection_2}
              src3={SubCollection_Number}
              avatar={avatar16}
            />
            <TrendingCollection
              srcPrimary={Collection_1}
              src1={SubCollection_1}
              src2={SubCollection_2}
              src3={SubCollection_Number}
              avatar={avatar16}
            />
            <TrendingCollection
              srcPrimary={Collection_1}
              src1={SubCollection_1}
              src2={SubCollection_2}
              src3={SubCollection_Number}
              avatar={avatar16}
            />
          </div>
        </div>
        {/* end desktop */}
      </section>
      <section className='layout'>
        <Heading
          title='Top creators'
          subTitle='Checkout Top Rated Creators on the NFT Marketplace'
        />
        <div className='flex flex-col gap-y-5 mb-[40px] md:grid md:grid-cols-2 md:gap-[30px] lg:grid lg:grid-cols-4 lg:gap-[30px]'>
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
          <TopRatedArtists src={avatar16} title='Keepitreal' price='34.53' />
        </div>
        <div className='md:hidden'>
          <Button icon={RocketLaunch} title='View Rankings' size='m' width='full' />
        </div>
      </section>
      <section className='layout'>
        <Heading title='Browse Categories' disiable />
        <div className='lg:hidden grid grid-flow-col auto-cols-max[90%] overflow-x-auto snap-x snap-mandatory snap-always gap-x-6 scrollbar-hide'>
          <Category title='Art' src={CategoryImage_1} />
          <Category title='Art' src={CategoryImage_1} />
          <Category title='Art' src={CategoryImage_1} />
          <Category title='Art' src={CategoryImage_1} />
          <Category title='Art' src={CategoryImage_1} />
          <Category title='Art' src={CategoryImage_1} />
        </div>
        <div className='hidden lg:block'>
          <div className='grid grid-cols-4 gap-5'>
            <Category title='Art' src={CategoryImage_1} />
            <Category title='Art' src={CategoryImage_1} />
            <Category title='Art' src={CategoryImage_1} />
            <Category title='Art' src={CategoryImage_1} />
          </div>
        </div>
      </section>
      <section className='layout'>
        <Heading title='Discover More NFTs' subTitle='Explore new trending NFTs' />
        <div className='lg:hidden mb-[40px] grid grid-flow-col auto-cols-max[90%] overflow-x-auto snap-x snap-mandatory snap-always gap-x-6 scrollbar-hide'>
          <DiscoverMore
            src={DiscoverImage_1}
            avatar={avatar16}
            title='Distant Galaxy'
            name='MoonDancer'
          />
          <DiscoverMore
            src={DiscoverImage_1}
            avatar={avatar16}
            title='Distant Galaxy'
            name='MoonDancer'
          />
          <DiscoverMore
            src={DiscoverImage_1}
            avatar={avatar16}
            title='Distant Galaxy'
            name='MoonDancer'
          />
          <DiscoverMore
            src={DiscoverImage_1}
            avatar={avatar16}
            title='Distant Galaxy'
            name='MoonDancer'
          />
        </div>
        <div className='md:hidden'>
          <Button icon={RocketLaunch} title='See All' size='m' width='full' />
        </div>
        <div className='hidden lg:block'>
          <div className='grid grid-cols-4 gap-5'>
            <DiscoverMore
              src={DiscoverImage_1}
              avatar={avatar16}
              title='Distant Galaxy'
              name='MoonDancer'
            />
            <DiscoverMore
              src={DiscoverImage_1}
              avatar={avatar16}
              title='Distant Galaxy'
              name='MoonDancer'
            />
            <DiscoverMore
              src={DiscoverImage_1}
              avatar={avatar16}
              title='Distant Galaxy'
              name='MoonDancer'
            />
            <DiscoverMore
              src={DiscoverImage_1}
              avatar={avatar16}
              title='Distant Galaxy'
              name='MoonDancer'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='lg:bg-hero-desktop bg-hero-mashroom bg-center bg-no-repeat bg-cover w-full md:pt-[200px]'>
          <div className='lg:px-[150px] lg:flex lg:items-center lg:justify-between px-[30px] pt-[80px] pb-[40px] md:grid md:grid-cols-2'>
            <div>
              <div className='flex items-center gap-x-3 bg-gray rounded-[20px] py-[10px] px-5 w-[150px]'>
                <img className='w-[24px]' src={avatar16} alt='' />
                <h3 className='text-white text-base font-normal leading-[140%]'>Shroomie</h3>
              </div>
              <h2 className='lg:text-[52px] text-white text-[38px] font-semibold capitalize leading-[120%] my-[30px]'>
                Magic Mashrooms
              </h2>
              <div className='md:block hidden'>
                <Button icon={RocketLaunch} title='See NFT' size='m' />
              </div>
            </div>
            <div className='lg:w-[400px] bg-grayOpacity backdrop-blur-[5px] rounded-[20px] p-[30px] mb-[30px] md:mt-[60px] md:mb-0'>
              <h3 className='font-spaceMono text-xs text-white font-normal mb-[10px]'>
                Auction ends in:
              </h3>
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='text-clock'>59</h1>
                  <p className='font-spaceMono text-xs text-white font-normal'>Hours</p>
                </div>
                <span className='text-white font-extrabold'>:</span>
                <div>
                  <h1 className='text-clock'>59</h1>
                  <p className='font-spaceMono text-xs text-white font-normal'>Minutes</p>
                </div>
                <span className='text-white font-extrabold'>:</span>
                <div>
                  <h1 className='text-clock'>59</h1>
                  <p className='font-spaceMono text-xs text-white font-normal'>Seconds</p>
                </div>
              </div>
            </div>
            <div className='md:hidden'>
              <Button icon={RocketLaunch} title='See NFT' size='m' width='full' />
            </div>
          </div>
        </div>
      </section>
      <section className='layout'>
        <Heading title='How it works' subTitle='Find out how to get started' disiable />
        <div className='flex flex-col gap-y-5 md:grid md:grid-cols-3 md:gap-x-[30px]'>
          <InfoCard
            src={InfoCardIcons1}
            title='Setup Your wallet'
            desc='Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
          />
          <InfoCard
            src={InfoCardIcons1}
            title='Setup Your wallet'
            desc='Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
          />
          <InfoCard
            src={InfoCardIcons1}
            title='Setup Your wallet'
            desc='Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
          />
        </div>
      </section>
      <section className='layout'>
        <div className='lg:gap-x-[80px] lg:p-[60px] md:grid md:grid-cols-2 md:gap-x-[30px] md:bg-gray md:px-[30px] md:py-[40px] md:rounded-[20px]'>
          <div className='lg:hidden'>
            <img className='w-full' src={Widget1} alt='' />
          </div>
          <div className='lg:block hidden'>
            <img className='w-full' src={Widget_Desktop} alt='' />
          </div>
          <div>
            <h3 className='lg:text-[38px] md:mt-0 mt-[30px] mb-[10px] text-[28px] text-white leading-[140%] font-semibold capitalize'>
              Join our weekly digest
            </h3>
            <p className='lg:text-[22px] text-base text-grayLight font-normal leading-[140%]'>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className='relative'>
              <input
                className='lg:absolute md:mb-4 md:mt-[30px] mt-[40px] mb-[20px] w-full px-5 py-[18px] rounded-[20px] bg-white text-dark text-base leading-[140%] font-normal border-[1px] border-primary border-solid'
                type='text'
                placeholder='Enter Your Email Here'
              />
              <div className='lg:block hidden absolute top-[30px] right-0'>
                <Button icon={RocketLaunch} title='Get started' size='m' />
              </div>
              <div className='lg:hidden'>
                <Button icon={RocketLaunch} title='Get started' size='m' width='full' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
