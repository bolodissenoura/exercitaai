import React, { useState } from "react";
import * as S from "../../styles/tabs";

// Define your Stitches styles

type Tab = {
  title: string;
  content: any;
};

type TabComponentProps = {
  tabs: Tab[];
};

// Tab component
export function Tabs({ tabs }: TabComponentProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <S.TabWrapper>
        {tabs.map((tab, index) => (
          <S.TabItem
            key={index}
            onClick={() => handleTabClick(index)}
            css={{
              background:
                activeTab === index ? "$gradientButtonPurple" : "transparent",
              color:
                activeTab === index ? "white" : "black",
            }}>
            {tab.title}
          </S.TabItem>
        ))}
      </S.TabWrapper>
      <S.TabContent>{tabs[activeTab].content}</S.TabContent>
    </div>
  );
}
