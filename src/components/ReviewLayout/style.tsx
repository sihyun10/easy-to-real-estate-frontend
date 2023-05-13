import styled from '@emotion/styled';

export const ReviewLayoutContainer = styled.div`
  /* width: 100%;
  height: 100vh;
  overflow-y: hidden; */
`;

export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  .summarySection {
    min-width: 502px;
    height: calc(100vh - 64px);
    padding: 32px 50px;
    background-color: #fdfdfd;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        background-color: #bfbfbf;
        border-radius: 4px;
      }
    }
  }
  .detailSection {
    width: 100%;
    min-width: calc(1440px - (250px + 502px));
    padding: 0 5px;
    .reviewDetail {
      position: relative;
      padding: 20px 30px;
      overflow-y: auto;
      height: calc(100vh - 100px);
      &::-webkit-scrollbar {
        width: 6px;
      }
      &:hover {
        &::-webkit-scrollbar-thumb {
          background-color: #bfbfbf;
          border-radius: 4px;
        }
      }
    }
  }
`;

export const TabMenus = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 36px;
    font-size: 12px;
    color: #7d7d7d;
    &:hover {
      font-weight: 700;
      color: #1a237e;
    }
    &.active {
      font-weight: 700;
      color: #1a237e;
      &:after {
        position: absolute;
        content: '';
        width: inherit;
        display: block;
        border-bottom: 2px solid #1a237e;
        bottom: -1px;
        left: 0;
      }
    }
  }
`;
