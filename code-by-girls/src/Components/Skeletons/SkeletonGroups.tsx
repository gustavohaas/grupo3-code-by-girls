import { Box, Flex, Skeleton, SkeletonProps } from "@chakra-ui/react";

interface CardSkeletonProps extends SkeletonProps {
  repeatCount: number;
}

export const SkeletonGroups = ({
  repeatCount = 1,
  ...rest
}: CardSkeletonProps) => {
  const howMany = Array.from(Array(repeatCount).keys());
  return (
    <>
      {howMany.map((_) => (
        <Skeleton {...rest} speed={1}>
          <Box w={["220px", "320px", "420px"]} height="150px"></Box>
        </Skeleton>
      ))}
    </>
  );
};
