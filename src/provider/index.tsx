import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import 'dayjs/locale/tr';
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import locale from "antd/locale/tr_TR";

export type ProviderProps = {
  children: React.ReactNode;
};
export const Provider = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <ConfigProvider locale={locale}>
          <StyleProvider hashPriority="high">
            {children}
          </StyleProvider>
        </ConfigProvider>
      </Suspense>
    </BrowserRouter>
  );
};