'use client';
import Sidebar from '@/components/sidebar';
import { VToolTip } from '@/components/tooltip';
import { Input } from '@/components/ui/input';
import { ChevronDown, Compass, Grip, ImagePlus, Lightbulb, Mic, Sparkle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1">
        <nav className="sticky top-0 mx-5 my-4 flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-xl">
            Gemini <ChevronDown width={14} height={14} />
          </h1>
          <div className="flex items-center gap-3">
            <Link
              href=""
              className="flex gap-2 rounded-lg bg-gray-200 px-4 py-[.625rem] text-xs font-medium hover:bg-gray-300"
            >
              <Sparkle width={16} height={16} fill="red" color="black" />
              <span>Dùng thử Gemini Advanced</span>
            </Link>
            <div className="cursor-pointer rounded-full p-2 hover:bg-gray-200">
              <Grip width={20} height={20} />
            </div>
            <Image
              src={'/avatar.png'}
              alt="avatar"
              width={100}
              height={100}
              priority
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>
        </nav>
        <article className="h-[calc(100vh-210px)] w-full overflow-y-auto px-5 pt-4">
          {messages.length > 0 ? (
            <div className="mx-auto max-w-4xl">
              {messages.map((m) => (
                <div key={m.id}>
                  {m.role === 'user' ? 'User: ' : 'AI: '}
                  {m.content}
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-4xl">
              <h1 className="mx-2 mt-6 inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-[3.2rem] font-medium leading-tight text-transparent">
                Xin chào Khánh Minh!
              </h1>
              <h1 className="mx-2 mb-8 text-[3.2rem] font-medium leading-tight text-gray-400">
                Hôm nay tôi có thể giúp gì cho bạn?
              </h1>
              <div className="mb-3 mt-16 flex items-center justify-evenly gap-2">
                <div className="flex h-[12.5rem] w-[12.5rem] flex-col justify-between rounded-xl bg-gray-100 p-4">
                  <p>Thói quen trong gia đình</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Lightbulb />
                  </div>
                </div>
                <div className="flex h-[12.5rem] w-[12.5rem] flex-col justify-between rounded-xl bg-gray-100 p-4">
                  <p>Ý tưởng nhân vật cho tiểu thuyết</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Compass />
                  </div>
                </div>
                <div className="flex h-[12.5rem] w-[12.5rem] flex-col justify-between rounded-xl bg-gray-100 p-4">
                  <p>Các loại chế độ ăn</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Lightbulb />
                  </div>
                </div>
                <div className="flex h-[12.5rem] w-[12.5rem] flex-col justify-between rounded-xl bg-gray-100 p-4">
                  <p>Ý tưởng đặt tên sản phẩm</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Compass />
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
        <article>
          <div className="mx-auto mt-8 max-w-[940px]">
            <div className="relative mx-auto w-[880px] px-4">
              <form onSubmit={handleSubmit}>
                <Input
                  value={input}
                  placeholder="Nhập câu lệnh tại đây"
                  className="h-16 rounded-full border-none bg-gray-100 pl-6 text-lg placeholder:text-base focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                  onChange={handleInputChange}
                />
              </form>
              <div className="absolute right-8 top-2">
                <div className="flex items-center">
                  <VToolTip placeholder="Tải ảnh lên" direction="bottom" position="center">
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
                      <ImagePlus width={20} height={20} />
                    </div>
                  </VToolTip>
                  <VToolTip placeholder="Sử dụng micro" direction="bottom" position="center">
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
                      <Mic width={20} height={20} />
                    </div>
                  </VToolTip>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-xs">
              Gemini có thể đưa ra thông tin không chính xác, kể cả thông tin về con người, vì vậy, hãy xác minh các câu
              trả lời của Gemini. <br />{' '}
              <a href="" className="underline">
                Quyền riêng tư của bạn và Các ứng dụng Gemini
              </a>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
