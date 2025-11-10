import { ImageResponse } from 'next/og'

// Icon metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Gradient border + gradient fill icon
export default function Icon() {
  const gradientBackground = 'linear-gradient(135deg, #ff4d4d, #7f00ff)'
  const gradientBorder = 'linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          // Border with gradient trick
          background: `${gradientBorder}`,
          padding: '2px', // acts as border thickness
        }}
      >
        <div
          style={{
            flex: 1,
            background: gradientBackground,
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          Y
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
