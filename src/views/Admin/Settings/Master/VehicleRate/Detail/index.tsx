import { Descriptions } from 'antd'
import React from 'react'
import cssContent from '@nexys/components/Content/Content.module.scss'
import { UseVehicleRateData } from 'data/useVehicleRate'

interface DetailVehicleRateProps {
  data: UseVehicleRateData
}

function DetailVehicleRate(props: DetailVehicleRateProps) {
  const { data } = props
  return (
    <div className={cssContent.contentModal}>
      <Descriptions bordered size="small">
        <Descriptions.Item label="Plat Area">
          <b>{data?.platArea}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="Wilayah OJK">
          <b>{data?.wilayahOJK}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="Tarif TSFWD Compre">
          <b>{data?.tarif_TSFWD_Compre}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="Tarif TSFWD TLO">
          <b>{data?.tarif_TSFWD_TLO}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="Tarif EQ Compre">
          <b>{data?.tarif_EQ_Compre}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="Tarif EQ TLO">
          <b>{data?.tarif_EQ_TLO}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="1C 0-125">
          <b>{data?.['1C_0-125']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="2C > 125-200">
          <b>{data?.['2C_>_125-200']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="3C > 200-400">
          <b>{data?.['3C_>_200-400']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="4C > 400-800">
          <b>{data?.['4C_>_400-800']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="5C > 800">
          <b>{data?.['5C_>_800']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="1TLO 0-125">
          <b>{data?.['1TLO_0-125']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="2TLO > 125-200">
          <b>{data?.['2TLO_>_125-200']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="3TLO > 200-400">
          <b>{data?.['3TLO_>_200-400']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="4TLO > 400-800">
          <b>{data?.['4TLO_>_400-800']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="5TLO > 800">
          <b>{data?.['5TLO_>_800']}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="SRCC Com">
          <b>{data?.SRCC_Com}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="SRCC TLO">
          <b>{data?.SRCC_TLO}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="TS Com">
          <b>{data?.TS_Com}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="TS TLO">
          <b>{data?.TS_TLO}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="R2TLO">
          <b>{data?.R2TLO}</b>
        </Descriptions.Item>
      </Descriptions>

      <Descriptions bordered size="small">
        <Descriptions.Item label="Keterangan">
          <b>{data?.keterangan}</b>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default DetailVehicleRate
