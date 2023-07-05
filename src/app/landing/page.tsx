"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const features = [
  {
    title: "Ghi chép thu chi hàng ngày",
    content:
      "Bạn cần ghi lại các khoản chi tiêu hàng ngày: Ăn uống, đi chợ, con cái, hiếu hỉ… Sổ Thu Chi MISA sẽ giúp bạn quản lý việc này qua các ghi chép thu, chi theo từng hạng mục cụ thể.",
  },
  {
    title: "Đầy đủ các báo cáo thống kê",
    content:
      "Bạn muốn có cái nhìn tổng quan nhất về tình hình tài chính, thu chi, công nợ… từ các ghi chép hàng ngày. Hệ thống báo cáo sẽ cung cấp đầy đủ số liệu, từ đó giúp bạn đưa ra được những thay đổi nhanh chóng, kịp thời.",
  },
  {
    title: "Ghi chép thu chi hàng ngày",
    content:
      "Bạn cần ghi lại các khoản chi tiêu hàng ngày: Ăn uống, đi chợ, con cái, hiếu hỉ… Sổ Thu Chi MISA sẽ giúp bạn quản lý việc này qua các ghi chép thu, chi theo từng hạng mục cụ thể.",
  },
  {
    title: "Đầy đủ các báo cáo thống kê",
    content:
      "Bạn muốn có cái nhìn tổng quan nhất về tình hình tài chính, thu chi, công nợ… từ các ghi chép hàng ngày. Hệ thống báo cáo sẽ cung cấp đầy đủ số liệu, từ đó giúp bạn đưa ra được những thay đổi nhanh chóng, kịp thời.",
  },
  {
    title: "Ghi chép thu chi hàng ngày",
    content:
      "Bạn cần ghi lại các khoản chi tiêu hàng ngày: Ăn uống, đi chợ, con cái, hiếu hỉ… Sổ Thu Chi MISA sẽ giúp bạn quản lý việc này qua các ghi chép thu, chi theo từng hạng mục cụ thể.",
  },
  {
    title: "Đầy đủ các báo cáo thống kê",
    content:
      "Bạn muốn có cái nhìn tổng quan nhất về tình hình tài chính, thu chi, công nợ… từ các ghi chép hàng ngày. Hệ thống báo cáo sẽ cung cấp đầy đủ số liệu, từ đó giúp bạn đưa ra được những thay đổi nhanh chóng, kịp thời.",
  },
  {
    title: "Ghi chép thu chi hàng ngày",
    content:
      "Bạn cần ghi lại các khoản chi tiêu hàng ngày: Ăn uống, đi chợ, con cái, hiếu hỉ… Sổ Thu Chi MISA sẽ giúp bạn quản lý việc này qua các ghi chép thu, chi theo từng hạng mục cụ thể.",
  },
];

const Landing = () => {
  return (
    <section>
      <Box sx={{ background: 'url("/bg_banner.png")', pt: "3rem" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid className="md:px-4 relative" item xs={12} md={6}>
              <div className="float-right">
                <div className="pt-12 space-y-4">
                  <h1 className="text-4xl text-white font-semibold">
                    My money MOR
                  </h1>
                  <p className="px-[18px] py-[10px] inline-block rounded-full text-primary-light bg-white">
                    2.5Tr+ Người dùng
                  </p>
                  <h3 className="text-xl text-white">
                    Giải pháp quản lý tài chính cá nhân
                  </h3>
                </div>
                <div className="flex pt-5">
                  <Image
                    width={200}
                    height={88}
                    src="/ic_AppStore.png"
                    alt="ic_AppStore"
                  />
                  <Image
                    width={200}
                    height={88}
                    src="/ic_CHPlay.png"
                    alt="ic_CHPlay"
                  />
                </div>
              </div>
            </Grid>
            <Grid className="md:px-4" item xs={12} md={6}>
              <Image
                width={200}
                height={88}
                src="/img_banner.png"
                alt="ic_CHPlay"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className="p-4 container mx-auto">
        <div className="shadow-4xl rounded">
          <div className="py-8">
            <p className="text-sky-500 text-3xl uppercase text-center font-semibold">
              TÍNH NĂNG NỔI BẬT
            </p>
            <div className="pt-4 flex flex-wrap w-4/5 mx-auto justify-center space-y-8">
              {features.map((featute, index) => (
                <div key={index} className="px-4 w-1/2 space-y-4">
                  <Image
                  className="mx-auto"
                    src="/img_feature-1.png"
                    alt="ic_AppStore"
                    width={200}
                    height={212}
                  />
                  <h3 className="text-xl font-semibold text-center">
                    {featute.title}
                  </h3>
                  <p className="text-gray-700">{featute.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
